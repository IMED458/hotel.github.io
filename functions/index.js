/* eslint-disable */
const { onRequest } = require('firebase-functions/v2/https');
const { initializeApp } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

initializeApp();
const db = getFirestore();

// Stored in env for security; for testing we hard-code here as the user requested
const CHANNEX_API_KEY =
  process.env.CHANNEX_API_KEY ||
  'uhaIv0j0OZ5RjNq3coBzAFrRnFHpt4RidQults/vZl4nLlosoIEMpLB/8eJUVqxi';
const CHANNEX_BASE = 'https://staging.channex.io/api/v1';

// ---------------------------------------------------------------------------
// channexProxy  –  forwards every GET/POST/PUT/PATCH to the Channex API
//   Browser calls: GET/POST/PUT/PATCH https://<fn>/channexProxy?path=/availability
// ---------------------------------------------------------------------------
exports.channexProxy = onRequest({ cors: true, timeoutSeconds: 30 }, async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    return res.status(204).send('');
  }

  const path = String(req.query.path || '').replace(/^\/+/, '');
  if (!path) return res.status(400).json({ error: 'Missing ?path= parameter' });

  const url = `${CHANNEX_BASE}/${path}`;

  const fetchOptions = {
    method: req.method,
    headers: {
      'Content-Type': 'application/json',
      'user-api-key': CHANNEX_API_KEY,
    },
  };

  if (['POST', 'PUT', 'PATCH'].includes(req.method) && req.body) {
    fetchOptions.body = JSON.stringify(req.body);
  }

  try {
    const upstream = await fetch(url, fetchOptions);
    const text = await upstream.text();
    let json;
    try { json = JSON.parse(text); } catch { json = { raw: text }; }
    res.set('Access-Control-Allow-Origin', '*');
    res.status(upstream.status).json(json);
  } catch (err) {
    console.error('channexProxy error:', err.message);
    res.status(502).json({ error: err.message });
  }
});

// ---------------------------------------------------------------------------
// channexWebhook  –  receives booking/ARI events pushed by Channex
//   Register this URL in Channex → Settings → Webhooks:
//     https://us-central1-hotel-7497c.cloudfunctions.net/channexWebhook
// ---------------------------------------------------------------------------
exports.channexWebhook = onRequest({ timeoutSeconds: 30 }, async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const event = req.body || {};
  const eventType = String(event.event || event.type || event.event_type || '').toLowerCase();

  // Always persist the raw webhook payload for audit
  await db.collection('channexWebhooks').add({
    eventType,
    payload: event,
    receivedAt: FieldValue.serverTimestamp(),
  });

  // For booking events, write to a separate collection the frontend watches
  if (
    eventType.includes('booking') ||
    eventType === 'new_booking' ||
    eventType === 'modification' ||
    eventType === 'cancellation'
  ) {
    const booking = event.payload || event.data || event.booking || event;
    await db.collection('channexPendingBookings').add({
      eventType,
      booking,
      processed: false,
      receivedAt: FieldValue.serverTimestamp(),
    });
  }

  res.json({ ok: true, received: eventType || 'unknown' });
});
