// Channex proxy + webhook receiver — Cloudflare Worker
// Deploy: npx wrangler deploy

const CHANNEX_API_KEY = 'uhaIv0j0OZ5RjNq3coBzAFrRnFHpt4RidQults/vZl4nLlosoIEMpLB/8eJUVqxi';
const CHANNEX_BASE   = 'https://staging.channex.io/api/v1';
const FIRESTORE_BASE = 'https://firestore.googleapis.com/v1/projects/hotel-7497c/databases/(default)/documents';

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type,Authorization',
};

export default {
  async fetch(request) {
    const url    = new URL(request.url);
    const method = request.method;

    // Preflight
    if (method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    // ── /webhook  ──────────────────────────────────────────────────────────
    // Channex → Cloudflare Worker → Firestore channexPendingBookings
    if (url.pathname === '/webhook') {
      if (method !== 'POST') return json({ error: 'POST only' }, 405);

      let body = {};
      try { body = await request.json(); } catch {}

      const eventType = String(body.event || body.type || body.event_type || '').toLowerCase();

      // Save raw event for audit
      await firestoreAdd('channexWebhooks', {
        eventType:  { stringValue: eventType },
        payload:    { stringValue: JSON.stringify(body) },
        receivedAt: { stringValue: new Date().toISOString() },
      });

      // Queue booking events for the frontend to pick up
      if (eventType.includes('booking') || eventType === 'modification' || eventType === 'cancellation') {
        const booking = body.payload || body.data || body.booking || body;
        await firestoreAdd('channexPendingBookings', {
          eventType:  { stringValue: eventType },
          booking:    { stringValue: JSON.stringify(booking) },
          processed:  { booleanValue: false },
          receivedAt: { stringValue: new Date().toISOString() },
        });
      }

      return json({ ok: true, received: eventType || 'unknown' });
    }

    // ── /proxy  ────────────────────────────────────────────────────────────
    // Browser → Cloudflare Worker → Channex API  (avoids CORS)
    // Usage: GET /proxy?path=properties
    //        PUT /proxy?path=availability   (body = JSON)
    if (url.pathname === '/proxy' || url.pathname === '/') {
      const path = url.searchParams.get('path') || '';
      if (!path) return json({ error: 'Missing ?path= parameter' }, 400);

      const upstream = `${CHANNEX_BASE}/${path.replace(/^\/+/, '')}`;

      const init = {
        method,
        headers: {
          'Content-Type': 'application/json',
          'user-api-key': CHANNEX_API_KEY,
          'Authorization': `Bearer ${CHANNEX_API_KEY}`,
          'X-Api-Key': CHANNEX_API_KEY,
        },
      };

      if (['POST', 'PUT', 'PATCH'].includes(method)) {
        try { init.body = await request.text(); } catch {}
      }

      const res  = await fetch(upstream, init);
      const text = await res.text();

      return new Response(text, {
        status:  res.status,
        headers: { ...CORS, 'Content-Type': 'application/json' },
      });
    }

    return json({ error: 'Not found' }, 404);
  },
};

// ── helpers ────────────────────────────────────────────────────────────────

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}

async function firestoreAdd(collection, fields) {
  try {
    await fetch(`${FIRESTORE_BASE}/${collection}`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ fields }),
    });
  } catch (e) {
    console.error('Firestore write error:', e.message);
  }
}
