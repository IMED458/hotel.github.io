
<!DOCTYPE html>
<html lang="ka">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🏨 სასტუმროს მართვის სისტემა</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --primary: #3b82f6;
            --primary-dark: #1d4ed8;
            --secondary: #64748b;
            --success: #22c55e;
            --warning: #eab308;
            --danger: #ef4444;
            --light: #f8fafc;
            --dark: #0f172a;
            --border: #e2e8f0;
            --accent: #ec4899;
            --gradient: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
            --calendar-bg: #ffffff;
            --calendar-header: #f1f5f9;
            --calendar-border: #cbd5e1;
            --reserved: #fefce8;
            --reserved-border: #eab308;
            --checkedin: #dcfce7;
            --checkedin-border: #22c55e;
            --checkout: #fee2e2;
            --checkout-border: #ef4444;
            --day-width: 42px;
        }
        body { font-family: 'Roboto', sans-serif; background: var(--light); color: var(--dark); line-height: 1.6; }
        .container { max-width: 1440px; margin: 0 auto; padding: 24px; }

        /* Login */
        .login-container { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--gradient); }
        .login-box { background: white; padding: 48px; border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); width: 100%; max-width: 420px; transform: translateY(0); transition: transform 0.3s ease; }
        .login-box:hover { transform: translateY(-5px); }
        .login-box h1 { text-align: center; margin-bottom: 32px; color: var(--primary); font-size: 32px; display: flex; align-items: center; justify-content: center; gap: 8px; }

        /* Header */
        .header { background: white; padding: 24px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { color: var(--primary); font-size: 28px; display: flex; align-items: center; gap: 8px; }
        .user-info { display: flex; align-items: center; gap: 16px; }
        .user-info span { font-weight: 500; color: var(--secondary); }

        /* Navigation */
        .nav-tabs { display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap; background: white; padding: 12px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
        .nav-tabs button { padding: 12px 28px; background: transparent; border: 2px solid transparent; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 500; transition: all 0.3s ease; color: var(--dark); display: flex; align-items: center; gap: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .nav-tabs button:hover { background: var(--light); border-color: var(--primary); color: var(--primary); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .nav-tabs button.active { background: var(--primary); color: white; border-color: var(--primary); box-shadow: 0 4px 12px rgba(59,130,246,0.3); }

        /* Cards */
        .card { background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); margin-bottom: 24px; transition: transform 0.3s ease; }
        .card:hover { transform: translateY(-3px); }
        .card h2 { margin-bottom: 24px; color: var(--primary); font-size: 24px; }
        .card h3 { margin-bottom: 16px; color: var(--dark); font-size: 20px; }

        /* Stats */
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; margin-bottom: 32px; }
        .stat-card { background: linear-gradient(135deg, #ffffff, #f8fafc); padding: 24px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); text-align: center; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .stat-card:hover { transform: scale(1.05); box-shadow: 0 8px 24px rgba(0,0,0,0.1); }
        .stat-card .label { font-size: 16px; color: var(--secondary); margin-bottom: 8px; display: flex; align-items: center; justify-content: center; gap: 8px; }
        .stat-card .value { font-size: 36px; font-weight: bold; color: var(--primary); }

        /* Forms */
        .form-group { margin-bottom: 24px; }
        .form-group label { display: block; margin-bottom: 8px; font-weight: 500; color: var(--dark); }
        .form-group input, .form-group select, .form-group textarea { width: 100%; padding: 12px 16px; border: 2px solid var(--border); border-radius: 8px; font-size: 16px; transition: all 0.3s ease; }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); }
        .form-group textarea { resize: vertical; min-height: 100px; }
        .form-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }

        /* Buttons */
        .btn { padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 500; transition: all 0.3s ease; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
        .btn-primary { background: var(--primary); color: white; }
        .btn-primary:hover { background: var(--primary-dark); }
        .btn-success { background: var(--success); color: white; }
        .btn-success:hover { background: #16a34a; }
        .btn-warning { background: var(--warning); color: white; }
        .btn-warning:hover { background: #ca8a04; }
        .btn-danger { background: var(--danger); color: white; }
        .btn-danger:hover { background: #dc2626; }
        .btn-secondary { background: var(--secondary); color: white; }
        .btn-secondary:hover { background: #475569; }
        .btn-group { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-block { width: 100%; }

        /* Tables */
        .table-container { overflow-x: auto; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
        table { width: 100%; border-collapse: collapse; background: white; }
        table th, table td { padding: 16px; text-align: left; border-bottom: 1px solid var(--border); }
        table th { background: var(--calendar-header); font-weight: 600; color: var(--dark); }
        table tr:hover { background: rgba(59, 130, 246, 0.05); }

        /* Calendar */
        .calendar-wrapper { background: var(--calendar-bg); border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
        .calendar-header { display: flex; justify-content: space-between; align-items: center; padding: 24px; background: var(--gradient); color: white; }
        .calendar-header h2 { margin: 0; font-size: 24px; font-weight: 500; color: #ffffff; text-shadow: 0 1px 2px rgba(0,0,0,0.2); }
        .calendar-nav { display: flex; gap: 12px; }
        .calendar-nav button { padding: 8px 20px; background: rgba(255,255,255,0.2); border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 500; color: white; transition: all 0.3s ease; }
        .calendar-nav button:hover { background: rgba(255,255,255,0.3); }
        .calendar-controls { display: flex; justify-content: space-between; align-items: center; padding: 16px 24px; background: var(--calendar-header); border-bottom: 1px solid var(--calendar-border); }
        .calendar-legend { display: flex; gap: 24px; align-items: center; flex-wrap: wrap; }
        .legend-item { display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--secondary); }
        .legend-color { width: 24px; height: 24px; border-radius: 6px; border: 2px solid; }
        .legend-color.available { background: white; border-color: var(--calendar-border); }
        .legend-color.reserved { background: var(--reserved); border-color: var(--reserved-border); }
        .legend-color.checkedin { background: var(--checkedin); border-color: var(--checkedin-border); }
        .legend-color.checkout { background: var(--checkout); border-color: var(--checkout-border); }

        .calendar-grid { overflow-x: auto; background: white; }
        .calendar-grid-inner { min-width: 1400px; }
        .calendar-head-row, .calendar-row { display: grid; grid-template-columns: 180px repeat(var(--days-in-month), var(--day-width)); }
        .calendar-head-row { position: sticky; top: 0; z-index: 5; background: var(--calendar-header); border-bottom: 2px solid var(--calendar-border); }
        .calendar-head-cell { padding: 12px 8px; text-align: center; font-size: 14px; font-weight: 600; color: var(--dark); border-right: 1px solid var(--calendar-border); }
        .calendar-head-cell.room { text-align: left; padding-left: 16px; position: sticky; left: 0; z-index: 6; background: var(--calendar-header); border-right: 2px solid var(--calendar-border); }
        .calendar-head-cell.weekend { background: #ffedd5; color: #ea580c; }

        .calendar-row { position: relative; border-bottom: 1px solid var(--calendar-border); }
        .calendar-room-cell { padding: 14px 16px; font-weight: 600; color: var(--dark); background: white; border-right: 2px solid var(--calendar-border); position: sticky; left: 0; z-index: 4; display: flex; align-items: center; gap: 8px; }
        .calendar-day-cell { border-right: 1px solid var(--calendar-border); height: 48px; background: white; }
        .calendar-row:hover .calendar-day-cell { background: #f8fafc; }
        .calendar-row:hover .calendar-room-cell { background: #f8fafc; }

        .room-type-badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; margin-left: 8px; background: rgba(59, 130, 246, 0.1); color: var(--primary); }

        .reservation-bar {
            position: absolute; top: 8px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 600; padding: 0 8px; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: #111827;
            clip-path: polygon(var(--left-cut) 0, 100% 0, calc(100% - var(--right-cut)) 100%, 0 100%);
        }
        .reservation-bar.reserved { background: var(--reserved); border: 2px solid var(--reserved-border); color: #713f12; }
        .reservation-bar.checkedin { background: var(--checkedin); border: 2px solid var(--checkedin-border); color: #14532d; }
        .reservation-bar.checkout { background: var(--checkout); border: 2px solid var(--checkout-border); color: #991b1b; }

        /* Modals */
        .modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 1000; overflow-y: auto; transition: opacity 0.3s ease; }
        .modal.active { display: flex; justify-content: center; align-items: center; padding: 24px; opacity: 1; }
        .modal-content { background: white; border-radius: 16px; padding: 32px; max-width: 860px; width: 100%; max-height: 90vh; overflow-y: auto; transform: scale(0.95); transition: transform 0.3s ease; }
        .modal.active .modal-content { transform: scale(1); }
        .modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        .modal-header h2 { margin: 0; color: var(--primary); }
        .close-modal { background: none; border: none; font-size: 32px; cursor: pointer; color: var(--secondary); transition: color 0.3s ease; }
        .close-modal:hover { color: var(--danger); }

        /* Reservation info modal */
        .reservation-info-modal { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; border-radius: 12px; padding: 24px; box-shadow: 0 8px 24px rgba(0,0,0,0.25); z-index: 1001; min-width: 300px; display: none; }
        .reservation-info-modal.show { display: block; }
        .reservation-info-modal h4 { margin: 0 0 12px 0; font-size: 18px; color: var(--dark); }
        .reservation-info-modal p { margin: 4px 0; font-size: 14px; color: var(--secondary); }

        .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1000; display: none; }
        .modal-overlay.show { display: block; }

        /* Alerts */
        .alert { padding: 16px; border-radius: 8px; margin-bottom: 24px; font-weight: 500; }
        .alert-success { background: rgba(34, 197, 94, 0.1); color: var(--success); border: 1px solid var(--success); }
        .alert-error { background: rgba(239, 68, 68, 0.1); color: var(--danger); border: 1px solid var(--danger); }
        .alert-warning { background: rgba(234, 179, 8, 0.1); color: var(--warning); border: 1px solid var(--warning); }
        .alert-info { background: rgba(59, 130, 246, 0.1); color: var(--primary); border: 1px solid var(--primary); }

        /* Badges */
        .badge { padding: 6px 16px; border-radius: 24px; font-size: 14px; font-weight: 500; display: inline-block; }
        .badge-reserved { background: rgba(234, 179, 8, 0.1); color: var(--warning); }
        .badge-checkedin { background: rgba(34, 197, 94, 0.1); color: var(--success); }
        .badge-checkedout { background: rgba(226, 232, 240, 0.5); color: var(--secondary); }
        .badge-cancelled { background: rgba(239, 68, 68, 0.1); color: var(--danger); }
        .badge-noshow { background: rgba(243, 244, 246, 0.5); color: var(--dark); }

        /* Accordion */
        .accordion-item { border: 1px solid var(--border); border-radius: 12px; margin-bottom: 12px; overflow: hidden; transition: all 0.3s ease; }
        .accordion-item:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        .accordion-header { padding: 20px; background: var(--light); cursor: pointer; font-weight: 500; display: flex; justify-content: space-between; align-items: center; transition: background 0.3s ease; }
        .accordion-header:hover { background: #e0e7ff; }
        .accordion-content { padding: 24px; display: none; background: white; }
        .accordion-content.active { display: block; }

        /* Utilities */
        .hidden { display: none !important; }
        .text-center { text-align: center; }
        .mt-20 { margin-top: 20px; }
        .mb-20 { margin-bottom: 20px; }

        /* Responsive */
        @media (max-width: 768px) {
            .header { flex-direction: column; gap: 16px; }
            .nav-tabs button { flex: 1; min-width: 140px; }
            .form-row { grid-template-columns: 1fr; }
            .stats-grid { grid-template-columns: 1fr; }
            .calendar-controls { flex-direction: column; gap: 16px; align-items: flex-start; }
            :root { --day-width: 34px; }
        }
        /* Consent Form */
        .consent-form {
            padding: 20px;
            border: 1px solid var(--border);
            background: white;
            font-size: 14px;
        }
        .consent-form h3 {
            text-align: center;
            margin-bottom: 16px;
        }
        .consent-form p { margin-bottom: 10px; }
    </style>
</head>
<body>
    <div id="loginContainer" class="login-container">
        <div class="login-box">
            <h1>🏨 სასტუმროს მართვა</h1>
            <div id="loginAlert"></div>
            <div class="form-group">
                <label>მომხმარებელი</label>
                <input type="text" id="loginUsername" value="admin">
            </div>
            <div class="form-group">
                <label>პაროლი</label>
                <input type="password" id="loginPassword" value="admin123">
            </div>
            <button class="btn btn-primary btn-block" onclick="login()">შესვლა</button>
        </div>
    </div>

    <div id="appContainer" class="hidden">
        <div class="container">
            <div class="header">
                <h1>🏨 სასტუმროს მართვის სისტემა</h1>
                <div class="user-info">
                    <span id="currentUser"></span>
                    <button class="btn btn-secondary" onclick="logout()">გასვლა</button>
                </div>
            </div>

            <div class="nav-tabs">
                <button class="active" onclick="showPage('dashboard', this)">📊 დაშბორდი</button>
                <button onclick="showPage('calendar', this)">📅 კალენდარი</button>
                <button onclick="showPage('reservations', this)">📋 ჯავშნები</button>
                <button onclick="showPage('rooms', this)">🚪 ოთახები</button>
                <button onclick="showPage('reports', this)">📈 ანგარიშები</button>
                <button onclick="showPage('settings', this)">⚙️ პარამეტრები</button>
            </div>

            <div id="dashboardPage" class="page"></div>
            <div id="calendarPage" class="page hidden"></div>
            <div id="reservationsPage" class="page hidden"></div>
            <div id="roomsPage" class="page hidden"></div>
            <div id="reportsPage" class="page hidden"></div>
            <div id="settingsPage" class="page hidden"></div>
        </div>
    </div>

    <div id="reservationInfoModal" class="reservation-info-modal">
        <h4 id="infoGuestName"></h4>
        <p id="infoPhone"></p>
        <p id="infoDates"></p>
        <p id="infoTimes"></p>
        <p id="infoNights"></p>
        <p id="infoStatus"></p>
        <p id="infoTotal"></p>
        <div class="btn-group">
            <button class="btn btn-primary" id="editReservationBtn">რედაქტირება</button>
            <button class="btn btn-secondary" id="printInvoiceBtn">ინვოისის ბეჭდვა</button>
            <button class="btn btn-secondary" id="printConsentBtn">თანხმობის ბეჭდვა</button>
            <button class="btn btn-secondary" onclick="closeInfoModal()">დახურვა</button>
        </div>
    </div>
    <div id="modalOverlay" class="modal-overlay" onclick="closeInfoModal()"></div>

    <div id="editReservationModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>ჯავშნის რედაქტირება</h2>
                <button class="close-modal" onclick="closeModal('editReservationModal')">&times;</button>
            </div>
            <div id="editModalBody"></div>
        </div>
    </div>

    <div id="reservationModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="modalTitle">ახალი ჯავშანი</h2>
                <button class="close-modal" onclick="closeModal('reservationModal')">&times;</button>
            </div>
            <div id="modalBody"></div>
        </div>
    </div>

    <script>
        const LATE_CHECKOUT_RATE = 10; // 10 GEL per hour after 12:00

        class Storage {
            static _memory = {};
            static _available = null;
            static isAvailable() {
                if (this._available !== null) return this._available;
                try {
                    const k = '__storage_test__';
                    localStorage.setItem(k, '1');
                    localStorage.removeItem(k);
                    this._available = true;
                } catch (e) {
                    this._available = false;
                }
                return this._available;
            }
            static get(key, defaultValue = null) {
                try {
                    if (this.isAvailable()) {
                        const data = localStorage.getItem(key);
                        return data ? JSON.parse(data) : defaultValue;
                    }
                } catch (e) {
                    console.error('LocalStorage get error:', e);
                }
                return this._memory[key] !== undefined ? this._memory[key] : defaultValue;
            }
            static set(key, value) {
                try {
                    if (this.isAvailable()) {
                        localStorage.setItem(key, JSON.stringify(value));
                    }
                } catch (e) { console.error('LocalStorage set error:', e); }
                this._memory[key] = value;
            }
            static remove(key) {
                try {
                    if (this.isAvailable()) {
                        localStorage.removeItem(key);
                    }
                } catch (e) { console.error('LocalStorage remove error:', e); }
                delete this._memory[key];
            }
        }

        function initializeApp() {
            if (!Storage.get('initialized')) {
                Storage.set('users', [{ username: 'admin', password: 'admin123' }]);
                const rooms = [];
                for (let i = 101; i <= 112; i++) {
                    let type, price;
                    if (i <= 104) { type = 'Single'; price = 80; }
                    else if (i <= 108) { type = 'Double'; price = 120; }
                    else if (i <= 110) { type = 'Triple'; price = 150; }
                    else { type = 'Family'; price = 200; }
                    rooms.push({
                        id: i - 100,
                        roomNumber: String(i),
                        roomName: `Room ${i}`,
                        roomType: type,
                        basePrice: price,
                        status: 'Active',
                        cleaningStatus: 'Clean',
                        extraBedAvailable: i >= 109,
                        extraBedPrice: i >= 109 ? 30 : 0
                    });
                }
                Storage.set('rooms', rooms);

                const today = new Date();
                const reservations = [
                    {
                        id: 1,
                        guestName: 'გიორგი მელაძე',
                        guestPhone: '555123456',
                        guestEmail: 'giorgi@mail.ge',
                        guestIdNumber: '01001000001',
                        guestCitizenship: 'საქართველო',
                        guestBirthDate: '1990-01-01',
                        roomId: 1,
                        checkinDate: formatDate(addDays(today, -2)),
                        checkoutDate: formatDate(addDays(today, 1)),
                        checkinTime: '14:00',
                        checkoutTime: '12:00',
                        numGuests: 1,
                        notes: '',
                        status: 'Checked-in',
                        pricePerNight: 80,
                        lateCheckoutHours: 0,
                        extraBed: false,
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 2,
                        guestName: 'ნინო ბერიძე',
                        guestPhone: '555234567',
                        guestEmail: '',
                        guestIdNumber: '01001000002',
                        guestCitizenship: 'საქართველო',
                        guestBirthDate: '1992-02-02',
                        roomId: 3,
                        checkinDate: formatDate(addDays(today, 1)),
                        checkoutDate: formatDate(addDays(today, 4)),
                        checkinTime: '14:00',
                        checkoutTime: '12:00',
                        numGuests: 2,
                        notes: '',
                        status: 'Reserved',
                        pricePerNight: 80,
                        lateCheckoutHours: 0,
                        extraBed: false,
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 3,
                        guestName: 'დავით კაცია',
                        guestPhone: '555345678',
                        guestEmail: 'dato@mail.ge',
                        guestIdNumber: '01001000003',
                        guestCitizenship: 'საქართველო',
                        guestBirthDate: '1985-03-03',
                        roomId: 5,
                        checkinDate: formatDate(addDays(today, 5)),
                        checkoutDate: formatDate(addDays(today, 8)),
                        checkinTime: '14:00',
                        checkoutTime: '12:00',
                        numGuests: 2,
                        notes: '',
                        status: 'Reserved',
                        pricePerNight: 120,
                        lateCheckoutHours: 0,
                        extraBed: false,
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 4,
                        guestName: 'ანა გიორგაძე',
                        guestPhone: '555456789',
                        guestEmail: 'ana@mail.ge',
                        guestIdNumber: '01001000004',
                        guestCitizenship: 'საქართველო',
                        guestBirthDate: '1995-04-04',
                        roomId: 7,
                        checkinDate: formatDate(addDays(today, 0)),
                        checkoutDate: formatDate(addDays(today, 3)),
                        checkinTime: '14:00',
                        checkoutTime: '12:00',
                        numGuests: 1,
                        notes: '',
                        status: 'Checked-in',
                        pricePerNight: 120,
                        lateCheckoutHours: 0,
                        extraBed: false,
                        createdAt: new Date().toISOString()
                    }
                ];
                Storage.set('reservations', reservations);
                Storage.set('nextReservationId', 5);
                Storage.set('payments', []);
                Storage.set('nextPaymentId', 1);
                Storage.set('initialized', true);
            }
        }

        function formatDate(date) {
            const d = new Date(date);
            const year = d.getFullYear();
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
        function addDays(date, days) {
            const result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        }
        function calculateNights(checkin, checkout) {
            const cin = new Date(checkin);
            const cout = new Date(checkout);
            const diff = cout - cin;
            return Math.ceil(diff / (1000 * 60 * 60 * 24));
        }
        function parseTimeToMinutes(timeStr) {
            if (!timeStr || !timeStr.includes(':')) return null;
            const [h, m] = timeStr.split(':').map(Number);
            if (Number.isNaN(h) || Number.isNaN(m)) return null;
            return h * 60 + m;
        }
        function calculateLateCheckoutHours(checkoutTime) {
            const minutes = parseTimeToMinutes(checkoutTime);
            if (minutes === null) return 0;
            const diff = minutes - (12 * 60);
            return diff > 0 ? Math.ceil(diff / 60) : 0;
        }
        function showAlert(containerId, message, type = 'success') {
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
                setTimeout(() => { container.innerHTML = ''; }, 3000);
            }
        }
        function isWeekend(date) {
            const d = new Date(date);
            const day = d.getDay();
            return day === 0 || day === 6;
        }

        function login() {
            initializeApp();
            const username = document.getElementById('loginUsername').value.trim();
            const password = document.getElementById('loginPassword').value;
            const users = Storage.get('users', []);
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                Storage.set('currentUser', username);
                document.getElementById('loginContainer').classList.add('hidden');
                document.getElementById('appContainer').classList.remove('hidden');
                document.getElementById('currentUser').textContent = `მომხმარებელი: ${username}`;
                showPage('dashboard');
            } else {
                showAlert('loginAlert', 'არასწორი მომხმარებელი ან პაროლი', 'error');
            }
        }
        function logout() {
            Storage.remove('currentUser');
            document.getElementById('loginContainer').classList.remove('hidden');
            document.getElementById('appContainer').classList.add('hidden');
            document.getElementById('loginPassword').value = '';
        }

        function showPage(pageName, btnEl = null) {
            document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
            document.querySelectorAll('.nav-tabs button').forEach(btn => btn.classList.remove('active'));

            const pageElement = document.getElementById(`${pageName}Page`);
            if (pageElement) pageElement.classList.remove('hidden');
            if (btnEl) btnEl.classList.add('active');

            switch (pageName) {
                case 'dashboard': renderDashboard(); break;
                case 'calendar': renderCalendar(); break;
                case 'reservations': renderReservations(); break;
                case 'rooms': renderRooms(); break;
                case 'reports': renderReports(); break;
                case 'settings': renderSettings(); break;
            }

            if (pageName === 'reservations') {
                const hash = window.location.hash;
                if (hash.startsWith('#res')) {
                    const id = parseInt(hash.substring(4));
                    openReservationAccordion(id);
                    window.location.hash = '';
                }
            }
        }

        function renderDashboard() {
            const today = formatDate(new Date());
            const reservations = Storage.get('reservations', []);
            const rooms = Storage.get('rooms', []);
            const arrivals = reservations.filter(r => r.checkinDate === today && r.status !== 'Cancelled').length;
            const departures = reservations.filter(r => r.checkoutDate === today && r.status === 'Checked-in').length;
            const inHouse = reservations.filter(r => r.status === 'Checked-in').length;
            const checkedInRoomIds = reservations.filter(r => r.status === 'Checked-in').map(r => r.roomId);
            const available = rooms.filter(r => r.status === 'Active' && !checkedInRoomIds.includes(r.id)).length;
            const arrivalsToday = reservations.filter(r => r.checkinDate === today && r.status !== 'Cancelled');
            const departuresToday = reservations.filter(r => r.checkoutDate === today && r.status === 'Checked-in');

            let html = `
                <div class="stats-grid">
                    <div class="stat-card"><div class="label">🛬 დღევანდელი ჩასახლებები</div><div class="value">${arrivals}</div></div>
                    <div class="stat-card"><div class="label">🛫 დღევანდელი გასახლებები</div><div class="value">${departures}</div></div>
                    <div class="stat-card"><div class="label">🏠 ამჟამად დასახლებული</div><div class="value">${inHouse}</div></div>
                    <div class="stat-card"><div class="label">🆓 თავისუფალი ოთახები</div><div class="value">${available}</div></div>
                </div>
                <div class="card">
                    <h3>დღევანდელი ჩასახლებები</h3>
                    ${arrivalsToday.length > 0 ? `
                        <div class="table-container">
                            <table>
                                <thead>
                                    <tr><th>სტუმარი</th><th>ტელეფონი</th><th>ოთახი</th><th>სტატუსი</th></tr>
                                </thead>
                                <tbody>
                                    ${arrivalsToday.map(r => {
                                        const room = rooms.find(rm => rm.id === r.roomId);
                                        return `
                                            <tr>
                                                <td>${r.guestName}</td>
                                                <td>${r.guestPhone || '-'}</td>
                                        <td>${room ? (room.roomName || room.roomNumber) : '-'}</td>
                                                <td><span class="badge badge-${r.status.toLowerCase().replace('-', '')}">${r.status}</span></td>
                                            </tr>
                                        `;
                                    }).join('')}
                                </tbody>
                            </table>
                        </div>
                    ` : '<div class="alert alert-info">დღეს ჩასახლებები არ არის</div>'}
                </div>
                <div class="card">
                    <h3>დღევანდელი გასახლებები</h3>
                    ${departuresToday.length > 0 ? `
                        <div class="table-container">
                            <table>
                                <thead>
                                    <tr><th>სტუმარი</th><th>ტელეფონი</th><th>ოთახი</th><th>სტატუსი</th></tr>
                                </thead>
                                <tbody>
                                    ${departuresToday.map(r => {
                                        const room = rooms.find(rm => rm.id === r.roomId);
                                        return `
                                            <tr>
                                                <td>${r.guestName}</td>
                                                <td>${r.guestPhone || '-'}</td>
                                        <td>${room ? (room.roomName || room.roomNumber) : '-'}</td>
                                                <td><span class="badge badge-${r.status.toLowerCase().replace('-', '')}">${r.status}</span></td>
                                            </tr>
                                        `;
                                    }).join('')}
                                </tbody>
                            </table>
                        </div>
                    ` : '<div class="alert alert-info">დღეს გასახლებები არ არის</div>'}
                </div>
            `;
            document.getElementById('dashboardPage').innerHTML = html;
        }

        let currentCalendarDate = new Date();
        function renderCalendar() {
            const year = currentCalendarDate.getFullYear();
            const month = currentCalendarDate.getMonth();
            const monthNames = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'];
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            const rooms = Storage.get('rooms', []);
            const reservations = Storage.get('reservations', []);

            let headerCells = '<div class="calendar-head-row" style="--days-in-month:' + daysInMonth + '">';
            headerCells += '<div class="calendar-head-cell room">ოთახი</div>';
            for (let day = 1; day <= daysInMonth; day++) {
                const currentDate = new Date(year, month, day);
                const isWeekendDay = isWeekend(currentDate);
                headerCells += `<div class="calendar-head-cell ${isWeekendDay ? 'weekend' : ''}">${day}</div>`;
            }
            headerCells += '</div>';

            let bodyRows = '';
            rooms.forEach(room => {
                bodyRows += `<div class="calendar-row" style="--days-in-month:${daysInMonth};">`;
                bodyRows += `<div class="calendar-room-cell">${room.roomName || room.roomNumber}<span class="room-type-badge">${room.roomType}</span></div>`;

                for (let day = 1; day <= daysInMonth; day++) {
                    bodyRows += `<div class="calendar-day-cell"></div>`;
                }

                const roomRes = reservations.filter(r => r.roomId === room.id && r.status !== 'Cancelled');
                const monthStart = new Date(year, month, 1);
                const monthEnd = new Date(year, month + 1, 0);
                roomRes.forEach(res => {
                    const checkin = new Date(res.checkinDate);
                    const checkout = new Date(res.checkoutDate);

                    if (checkout <= monthStart || checkin > monthEnd) return;

                    const startInMonth = checkin.getFullYear() === year && checkin.getMonth() === month;
                    const endInMonth = checkout.getFullYear() === year && checkout.getMonth() === month;

                    const displayStart = startInMonth ? checkin : monthStart;
                    const displayEnd = endInMonth ? checkout : new Date(year, month + 1, 1);

                    const startIndex = displayStart.getDate();
                    const endIndex = endInMonth ? displayEnd.getDate() : daysInMonth + 1;

                    const startInset = startInMonth ? 0.5 : 0;
                    const endInset = endInMonth ? 0.5 : 0;

                    const leftPx = ((startIndex - 1) + startInset) * parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--day-width'));
                    const rightPx = ((endIndex - 1) + endInset) * parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--day-width'));
                    const widthPx = Math.max(rightPx - leftPx, 8);

                    const statusClass = res.status === 'Checked-in' ? 'checkedin' : (res.status === 'Checked-out' ? 'checkout' : 'reserved');

                    const dayWidth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--day-width'));
                    const leftCut = startInset * dayWidth;
                    const rightCut = endInset * dayWidth;
                    bodyRows += `
                        <div class="reservation-bar ${statusClass}" data-reservation-id="${res.id}"
                            style="left: ${leftPx + 180}px; width: ${widthPx}px; --left-cut:${leftCut}px; --right-cut:${rightCut}px;"
                            onclick="showReservationInfo(this)">
                            ${res.guestName.split(' ')[0]}
                        </div>
                    `;
                });

                bodyRows += `</div>`;
            });

            const html = `
                <div class="card">
                    <div class="calendar-wrapper">
                        <div class="calendar-header">
                            <h2>${monthNames[month]} ${year}</h2>
                            <div class="calendar-nav">
                                <button onclick="changeCalendarMonth(-1)">← წინა თვე</button>
                                <button onclick="goToToday()">დღეს</button>
                                <button onclick="changeCalendarMonth(1)">შემდეგი თვე →</button>
                            </div>
                        </div>
                        <div class="calendar-controls">
                            <div class="calendar-legend">
                                <div class="legend-item"><div class="legend-color available"></div><span>თავისუფალი</span></div>
                                <div class="legend-item"><div class="legend-color reserved"></div><span>დაჯავშნილი</span></div>
                                <div class="legend-item"><div class="legend-color checkedin"></div><span>დასახლებული</span></div>
                                <div class="legend-item"><div class="legend-color checkout"></div><span>გასახლება</span></div>
                            </div>
                        </div>
                        <div class="calendar-grid">
                            <div class="calendar-grid-inner">
                                ${headerCells}
                                ${bodyRows}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <h3>ხელმისაწვდომობის შემოწმება</h3>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Check-in</label>
                            <input type="date" id="availCheckIn" value="${formatDate(new Date())}">
                        </div>
                        <div class="form-group">
                            <label>Check-out</label>
                            <input type="date" id="availCheckOut" value="${formatDate(addDays(new Date(), 1))}">
                        </div>
                        <div class="form-group">
                            <label>&nbsp;</label>
                            <button class="btn btn-primary btn-block" onclick="checkAvailability()">შემოწმება</button>
                        </div>
                    </div>
                    <div id="availabilityResults"></div>
                </div>
            `;
            document.getElementById('calendarPage').innerHTML = html;
        }

        function changeCalendarMonth(delta) { currentCalendarDate.setMonth(currentCalendarDate.getMonth() + delta); renderCalendar(); }
        function goToToday() { currentCalendarDate = new Date(); renderCalendar(); }

        function showReservationInfo(element) {
            const reservationId = element.getAttribute('data-reservation-id');
            if (!reservationId) return;
            const reservations = Storage.get('reservations', []);
            const reservation = reservations.find(r => r.id === parseInt(reservationId));
            if (reservation) {
                const total = getReservationFinancials(reservation.id);
                document.getElementById('infoGuestName').textContent = reservation.guestName;
                document.getElementById('infoPhone').innerHTML = reservation.guestPhone ? `📞 ${reservation.guestPhone}` : '';
                document.getElementById('infoDates').innerHTML = `📅 ${reservation.checkinDate} - ${reservation.checkoutDate}`;
                const cinTime = reservation.checkinTime || '14:00';
                const coutTime = reservation.checkoutTime || '12:00';
                document.getElementById('infoTimes').innerHTML = `⏰ Check-in: ${cinTime} | Check-out: ${coutTime}`;
                document.getElementById('infoNights').innerHTML = `🌙 ${calculateNights(reservation.checkinDate, reservation.checkoutDate)} ღამე`;
                document.getElementById('infoStatus').innerHTML = `<span class="badge badge-${reservation.status.toLowerCase().replace('-', '')}">${reservation.status}</span>`;
                document.getElementById('infoTotal').innerHTML = `💵 ჯამი: ${total.total}₾ ( + ლეით ჩექაუთი ${total.lateCheckoutFee}₾ )`;
                document.getElementById('editReservationBtn').onclick = function() {
                    closeInfoModal();
                    openEditReservationModal(reservation.id);
                };
                document.getElementById('printInvoiceBtn').onclick = function() {
                    printInvoice(reservation.id);
                };
                const consentBtn = document.getElementById('printConsentBtn');
                if (consentBtn) {
                    consentBtn.onclick = function() { printConsent(reservation.id); };
                }
                document.getElementById('reservationInfoModal').classList.add('show');
                document.getElementById('modalOverlay').classList.add('show');
            }
        }
        function closeInfoModal() {
            document.getElementById('reservationInfoModal').classList.remove('show');
            document.getElementById('modalOverlay').classList.remove('show');
        }

        function openEditReservationModal(reservationId) {
            const reservations = Storage.get('reservations', []);
            const reservation = reservations.find(r => r.id === reservationId);
            const rooms = Storage.get('rooms', []);
            const room = rooms.find(r => r.id === reservation.roomId);
            if (reservation) {
                document.getElementById('editModalBody').innerHTML = `
                    <div id="editResAlert"></div>
                    <div class="form-row">
                        <div class="form-group"><label>სტუმრის სახელი *</label><input type="text" id="editGuestName" value="${reservation.guestName}"></div>
                        <div class="form-group"><label>ტელეფონი</label><input type="text" id="editGuestPhone" value="${reservation.guestPhone || ''}"></div>
                    </div>
                    <div class="form-row">
                        <div class="form-group"><label>ელფოსტა</label><input type="email" id="editGuestEmail" value="${reservation.guestEmail || ''}"></div>
                        <div class="form-group"><label>პირადი ნომერი / პასპორტის №</label><input type="text" id="editGuestIdNumber" value="${reservation.guestIdNumber || ''}"></div>
                    </div>
                    <div class="form-row">
                        <div class="form-group"><label>მოქალაქეობა</label><input type="text" id="editGuestCitizenship" value="${reservation.guestCitizenship || ''}"></div>
                        <div class="form-group"><label>დაბადების თარიღი</label><input type="date" id="editGuestBirthDate" value="${reservation.guestBirthDate || ''}"></div>
                    </div>
                    <div class="form-row">
                        <div class="form-group"><label>სტუმრების რაოდენობა</label><input type="number" id="editNumGuests" value="${reservation.numGuests}" min="1"></div>
                    </div>
                    <div class="form-row">
                        <div class="form-group"><label>Check-in *</label><input type="date" id="editCheckinDate" value="${reservation.checkinDate}"></div>
                        <div class="form-group"><label>Check-out *</label><input type="date" id="editCheckoutDate" value="${reservation.checkoutDate}"></div>
                    </div>
                    <div class="form-row">
                        <div class="form-group"><label>Check-in დრო</label><input type="time" id="editCheckinTime" value="${reservation.checkinTime || '14:00'}"></div>
                        <div class="form-group"><label>Check-out დრო</label><input type="time" id="editCheckoutTime" value="${reservation.checkoutTime || '12:00'}"></div>
                    </div>
                    <div class="form-row">
                        <div class="form-group"><label>ლეით ჩექაუთ საათები (ავტო)</label><input type="number" id="editLateCheckoutHours" value="${calculateLateCheckoutHours(reservation.checkoutTime || '12:00')}" min="0" disabled></div>
                        <div class="form-group">
                            <label>სტატუსი</label>
                            <select id="editStatus">
                                <option value="Reserved" ${reservation.status === 'Reserved' ? 'selected' : ''}>Reserved</option>
                                <option value="Checked-in" ${reservation.status === 'Checked-in' ? 'selected' : ''}>Checked-in</option>
                                <option value="Checked-out" ${reservation.status === 'Checked-out' ? 'selected' : ''}>Checked-out</option>
                                <option value="Cancelled" ${reservation.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
                                <option value="No-show" ${reservation.status === 'No-show' ? 'selected' : ''}>No-show</option>
                            </select>
                        </div>
                        <div class="form-group"><label>ფასი ღამეში (₾)</label><input type="number" id="editPricePerNight" value="${reservation.pricePerNight}" min="0" step="10"></div>
                    </div>
                    <div class="form-group"><label>შენიშვნა</label><textarea id="editNotes">${reservation.notes || ''}</textarea></div>
                    <div class="form-group">
                        <label>ექსტრა ბედი</label>
                        <input type="checkbox" id="editExtraBed" ${reservation.extraBed ? 'checked' : ''} ${room.extraBedAvailable ? '' : 'disabled'}>
                        ${!room.extraBedAvailable ? '<span>(მიუწვდომელი)</span>' : `<span>(${room.extraBedPrice}₾)</span>`}
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-primary" onclick="saveEditedReservation(${reservation.id})">შენახვა</button>
                        <button class="btn btn-secondary" onclick="closeModal('editReservationModal')">გაუქმება</button>
                    </div>
                `;
                document.getElementById('editReservationModal').classList.add('active');
                const editCheckoutTime = document.getElementById('editCheckoutTime');
                const editLate = document.getElementById('editLateCheckoutHours');
                const updateLate = () => { editLate.value = calculateLateCheckoutHours(editCheckoutTime.value); };
                editCheckoutTime.addEventListener('change', updateLate);
                updateLate();
            }
        }

        function saveEditedReservation(reservationId) {
            const guestName = document.getElementById('editGuestName').value.trim();
            const guestPhone = document.getElementById('editGuestPhone').value.trim();
            const guestEmail = document.getElementById('editGuestEmail').value.trim();
            const guestIdNumber = document.getElementById('editGuestIdNumber').value.trim();
            const guestCitizenship = document.getElementById('editGuestCitizenship').value.trim();
            const guestBirthDate = document.getElementById('editGuestBirthDate').value;
            const numGuests = parseInt(document.getElementById('editNumGuests').value);
            const checkinDate = document.getElementById('editCheckinDate').value;
            const checkoutDate = document.getElementById('editCheckoutDate').value;
            const checkinTime = document.getElementById('editCheckinTime').value || '14:00';
            const checkoutTime = document.getElementById('editCheckoutTime').value || '12:00';
            const status = document.getElementById('editStatus').value;
            const pricePerNight = parseFloat(document.getElementById('editPricePerNight').value);
            const notes = document.getElementById('editNotes').value;
            const lateCheckoutHours = calculateLateCheckoutHours(checkoutTime);
            const extraBed = document.getElementById('editExtraBed').checked;

            if (!guestName) { showAlert('editResAlert', 'სახელი აუცილებელია!', 'error'); return; }
            if (checkoutDate <= checkinDate) { showAlert('editResAlert', 'Check-out უნდა იყოს Check-in-ის შემდეგ!', 'error'); return; }

            const reservations = Storage.get('reservations', []);
            const index = reservations.findIndex(r => r.id === reservationId);
            if (index !== -1) {
                const oldRes = reservations[index];
                if (checkinDate !== oldRes.checkinDate || checkoutDate !== oldRes.checkoutDate) {
                    if (!checkRoomAvailability(oldRes.roomId, checkinDate, checkoutDate, reservationId)) {
                        showAlert('editResAlert', 'ოთახი დაკავებულია ამ პერიოდზე!', 'error');
                        return;
                    }
                }
                reservations[index] = {
                    ...reservations[index],
                    guestName, guestPhone, guestEmail, guestIdNumber, guestCitizenship, guestBirthDate,
                    numGuests, checkinDate, checkoutDate, checkinTime, checkoutTime,
                    status, pricePerNight, notes, lateCheckoutHours, extraBed
                };

                if (status === 'Checked-out') {
                    const rooms = Storage.get('rooms', []);
                    const roomIndex = rooms.findIndex(r => r.id === reservations[index].roomId);
                    if (roomIndex !== -1) {
                        rooms[roomIndex].cleaningStatus = 'Dirty';
                        Storage.set('rooms', rooms);
                    }
                }

                Storage.set('reservations', reservations);
                showAlert('editResAlert', 'განახლებულია!', 'success');
                closeModal('editReservationModal');
                renderCalendar();
                renderReservations();
            }
        }

        function checkAvailability() {
            const checkin = document.getElementById('availCheckIn').value;
            const checkout = document.getElementById('availCheckOut').value;
            if (!checkin || !checkout || checkout <= checkin) {
                document.getElementById('availabilityResults').innerHTML = '<div class="alert alert-error">გთხოვთ აირჩიოთ სწორი თარიღები</div>';
                return;
            }
            const available = getAvailableRooms(checkin, checkout);
            const rooms = Storage.get('rooms', []);
            if (available.length > 0) {
                let html = `<div class="alert alert-success">თავისუფალია ${available.length} ოთახი:</div>
                    <div class="table-container"><table><thead><tr><th>ოთახი</th><th>ტიპი</th><th>ფასი</th></tr></thead><tbody>`;
                available.forEach(roomId => {
                    const room = rooms.find(r => r.id === roomId);
                    if (room) {
                        html += `<tr><td>${room.roomName || room.roomNumber}</td><td>${room.roomType}</td><td>${room.basePrice}₾</td></tr>`;
                    }
                });
                html += '</tbody></table></div>';
                document.getElementById('availabilityResults').innerHTML = html;
            } else {
                document.getElementById('availabilityResults').innerHTML = '<div class="alert alert-warning">თავისუფალი ოთახები არ არის ამ პერიოდზე</div>';
            }
        }
        function getAvailableRooms(checkin, checkout) {
            const rooms = Storage.get('rooms', []);
            const reservations = Storage.get('reservations', []);
            return rooms
                .filter(r => r.status === 'Active')
                .filter(room => !reservations.some(res =>
                    res.roomId === room.id && res.status !== 'Cancelled' && !(res.checkoutDate <= checkin || res.checkinDate >= checkout)
                ))
                .map(r => r.id);
        }
        function checkRoomAvailability(roomId, checkin, checkout, excludeReservationId = null) {
            const reservations = Storage.get('reservations', []);
            return !reservations.some(res => {
                if (excludeReservationId && res.id === excludeReservationId) return false;
                return res.roomId === roomId && res.status !== 'Cancelled' && !(res.checkoutDate <= checkin || res.checkinDate >= checkout);
            });
        }

        function renderReservations() {
            const reservations = Storage.get('reservations', []);
            const rooms = Storage.get('rooms', []);
            const statusEmojis = { 'Reserved': '🟡', 'Checked-in': '🟢', 'Checked-out': '⚪', 'Cancelled': '🔴', 'No-show': '⚫' };
            let html = `
                <div class="card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h2>ჯავშნები (${reservations.length} ცალი)</h2>
                        <button class="btn btn-success" onclick="openNewReservationModal()">+ ახალი ჯავშანი</button>
                    </div>
                    <div class="form-row mb-20">
                        <div class="form-group">
                            <label>სტატუსი</label>
                            <select id="filterStatus" onchange="renderReservations()">
                                <option value="">ყველა</option>
                                <option value="Reserved">Reserved</option>
                                <option value="Checked-in">Checked-in</option>
                                <option value="Checked-out">Checked-out</option>
                                <option value="Cancelled">Cancelled</option>
                                <option value="No-show">No-show</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>ძებნა</label>
                            <input type="text" id="searchTerm" placeholder="სახელი, ტელეფონი, ოთახი..." onkeyup="renderReservations()">
                        </div>
                    </div>
            `;
            const statusFilter = document.getElementById('filterStatus') ? document.getElementById('filterStatus').value : '';
            const searchTerm = document.getElementById('searchTerm') ? document.getElementById('searchTerm').value.toLowerCase() : '';
            let filtered = reservations;
            if (statusFilter) filtered = filtered.filter(r => r.status === statusFilter);
            if (searchTerm) {
                filtered = filtered.filter(r => {
                    const room = rooms.find(rm => rm.id === r.roomId);
                    return r.guestName.toLowerCase().includes(searchTerm) ||
                        (r.guestPhone && r.guestPhone.includes(searchTerm)) ||
                        (room && (room.roomNumber.includes(searchTerm) || (room.roomName || '').toLowerCase().includes(searchTerm)));
                });
            }
            filtered.sort((a, b) => new Date(b.checkinDate) - new Date(a.checkinDate));
            filtered.forEach(res => {
                const room = rooms.find(r => r.id === res.roomId);
                const nights = calculateNights(res.checkinDate, res.checkoutDate);
                const financials = getReservationFinancials(res.id);
                html += `
                    <div class="accordion-item" id="resAccordion${res.id}">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <span>${statusEmojis[res.status] || ''} ${res.guestName} - ოთახი ${room ? (room.roomName || room.roomNumber) : '-'} (${res.checkinDate} - ${res.checkoutDate})</span>
                            <span>▼</span>
                        </div>
                        <div class="accordion-content">
                            <div id="resAlert${res.id}"></div>
                            <div class="form-row">
                                <div class="form-group"><label>სტუმრის სახელი *</label><input type="text" id="guestName${res.id}" value="${res.guestName}"></div>
                                <div class="form-group"><label>ტელეფონი</label><input type="text" id="guestPhone${res.id}" value="${res.guestPhone || ''}"></div>
                            </div>
                            <div class="form-row">
                                <div class="form-group"><label>ელფოსტა</label><input type="email" id="guestEmail${res.id}" value="${res.guestEmail || ''}"></div>
                                <div class="form-group"><label>პირადი ნომერი / პასპორტის №</label><input type="text" id="guestIdNumber${res.id}" value="${res.guestIdNumber || ''}"></div>
                            </div>
                            <div class="form-row">
                                <div class="form-group"><label>მოქალაქეობა</label><input type="text" id="guestCitizenship${res.id}" value="${res.guestCitizenship || ''}"></div>
                                <div class="form-group"><label>დაბადების თარიღი</label><input type="date" id="guestBirthDate${res.id}" value="${res.guestBirthDate || ''}"></div>
                            </div>
                            <div class="form-row">
                                <div class="form-group"><label>სტუმრების რაოდენობა</label><input type="number" id="numGuests${res.id}" value="${res.numGuests}" min="1"></div>
                            </div>
                            <div class="form-row">
                                <div class="form-group"><label>Check-in *</label><input type="date" id="checkinDate${res.id}" value="${res.checkinDate}"></div>
                                <div class="form-group"><label>Check-out *</label><input type="date" id="checkoutDate${res.id}" value="${res.checkoutDate}"></div>
                            </div>
                            <div class="form-row">
                                <div class="form-group"><label>Check-in დრო</label><input type="time" id="checkinTime${res.id}" value="${res.checkinTime || '14:00'}"></div>
                                <div class="form-group"><label>Check-out დრო</label><input type="time" id="checkoutTime${res.id}" value="${res.checkoutTime || '12:00'}" onchange="updateLateCheckoutFromTime(${res.id})"></div>
                            </div>
                            <div class="form-row">
                                <div class="form-group"><label>ლეით ჩექაუთ საათები (ავტო)</label><input type="number" id="lateCheckoutHours${res.id}" value="${calculateLateCheckoutHours(res.checkoutTime || '12:00')}" min="0" disabled></div>
                                <div class="form-group">
                                    <label>ექსტრა ბედი</label>
                                    <input type="checkbox" id="extraBed${res.id}" ${res.extraBed ? 'checked' : ''} ${room.extraBedAvailable ? '' : 'disabled'}>
                                    ${!room.extraBedAvailable ? '<span>(მიუწვდომელი)</span>' : `<span>(${room.extraBedPrice}₾)</span>`}
                                </div>
                                <div class="form-group">
                                    <label>სტატუსი</label>
                                    <select id="status${res.id}">
                                        <option value="Reserved" ${res.status === 'Reserved' ? 'selected' : ''}>Reserved</option>
                                        <option value="Checked-in" ${res.status === 'Checked-in' ? 'selected' : ''}>Checked-in</option>
                                        <option value="Checked-out" ${res.status === 'Checked-out' ? 'selected' : ''}>Checked-out</option>
                                        <option value="Cancelled" ${res.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
                                        <option value="No-show" ${res.status === 'No-show' ? 'selected' : ''}>No-show</option>
                                    </select>
                                </div>
                                <div class="form-group"><label>ფასი ღამეში (₾)</label><input type="number" id="pricePerNight${res.id}" value="${res.pricePerNight}" min="0" step="10"></div>
                            </div>
                            <div class="form-group"><label>შენიშვნა</label><textarea id="notes${res.id}">${res.notes || ''}</textarea></div>
                            <div class="form-row">
                                <div class="form-group"><label>ღამეები</label><input type="text" value="${nights}" disabled></div>
                                <div class="form-group"><label>სრული თანხა</label><input type="text" value="${financials.total}₾ (ლეით: ${financials.lateCheckoutFee}₾)" disabled></div>
                            </div>
                            <div class="btn-group">
                                <button class="btn btn-primary" onclick="saveReservationFromAccordion(${res.id})">შენახვა</button>
                                <button class="btn btn-secondary" onclick="printInvoice(${res.id})">ინვოისის ბეჭდვა</button>
                                <button class="btn btn-secondary" onclick="printConsent(${res.id})">თანხმობის ბეჭდვა</button>
                                <button class="btn btn-danger" onclick="deleteReservation(${res.id})">წაშლა</button>
                            </div>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            document.getElementById('reservationsPage').innerHTML = html;
        }

        function toggleAccordion(header) {
            const content = header.nextElementSibling;
            content.classList.toggle('active');
        }

        function openReservationAccordion(resId) {
            const acc = document.getElementById(`resAccordion${resId}`);
            if (!acc) return;
            const header = acc.querySelector('.accordion-header');
            const content = acc.querySelector('.accordion-content');
            if (!content.classList.contains('active')) content.classList.add('active');
            acc.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        function updateLateCheckoutFromTime(resId) {
            const timeInput = document.getElementById(`checkoutTime${resId}`);
            const lateInput = document.getElementById(`lateCheckoutHours${resId}`);
            if (!timeInput || !lateInput) return;
            lateInput.value = calculateLateCheckoutHours(timeInput.value);
        }

        function openNewReservationModal() {
            const rooms = Storage.get('rooms', []);
            document.getElementById('modalTitle').textContent = 'ახალი ჯავშანი';
            document.getElementById('modalBody').innerHTML = `
                <div id="newResAlert"></div>
                <div class="form-row">
                    <div class="form-group"><label>სტუმრის სახელი *</label><input type="text" id="newGuestName"></div>
                    <div class="form-group"><label>ტელეფონი</label><input type="text" id="newGuestPhone"></div>
                </div>
                <div class="form-row">
                    <div class="form-group"><label>Check-in *</label><input type="date" id="newCheckinDate" value="${formatDate(new Date())}"></div>
                    <div class="form-group"><label>Check-out *</label><input type="date" id="newCheckoutDate" value="${formatDate(addDays(new Date(), 1))}"></div>
                </div>
                <div class="form-row">
                    <div class="form-group"><label>Check-in დრო</label><input type="time" id="newCheckinTime" value="14:00"></div>
                    <div class="form-group"><label>Check-out დრო</label><input type="time" id="newCheckoutTime" value="12:00"></div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>ოთახი</label>
                        <select id="newRoomId">${rooms.map(r => `<option value="${r.id}">${r.roomName || r.roomNumber} (${r.roomType})</option>`).join('')}</select>
                    </div>
                    <div class="form-group"><label>ფასი ღამეში (₾)</label><input type="number" id="newPricePerNight" value="${rooms[0]?.basePrice || 0}" min="0" step="10"></div>
                </div>
                <div class="form-row">
                    <div class="form-group"><label>სტატუსი</label>
                        <select id="newStatus"><option value="Reserved">Reserved</option><option value="Checked-in">Checked-in</option></select>
                    </div>
                    <div class="form-group"><label>ლეით ჩექაუთ საათები (ავტო)</label><input type="number" id="newLateCheckoutHours" value="0" min="0" disabled></div>
                </div>
                <div class="form-group"><label>შენიშვნა</label><textarea id="newNotes"></textarea></div>
                <div class="btn-group">
                    <button class="btn btn-success" onclick="createReservation()">შენახვა</button>
                    <button class="btn btn-secondary" onclick="closeModal('reservationModal')">გაუქმება</button>
                </div>
            `;
            document.getElementById('reservationModal').classList.add('active');
            document.getElementById('newRoomId').addEventListener('change', (e) => {
                const room = rooms.find(r => r.id === parseInt(e.target.value));
                if (room) document.getElementById('newPricePerNight').value = room.basePrice;
            });
            const newCheckoutTime = document.getElementById('newCheckoutTime');
            const newLate = document.getElementById('newLateCheckoutHours');
            const updateNewLate = () => { newLate.value = calculateLateCheckoutHours(newCheckoutTime.value); };
            newCheckoutTime.addEventListener('change', updateNewLate);
            updateNewLate();
        }

        function createReservation() {
            const guestName = document.getElementById('newGuestName').value.trim();
            const guestPhone = document.getElementById('newGuestPhone').value.trim();
            const checkinDate = document.getElementById('newCheckinDate').value;
            const checkoutDate = document.getElementById('newCheckoutDate').value;
            const checkinTime = document.getElementById('newCheckinTime').value || '14:00';
            const checkoutTime = document.getElementById('newCheckoutTime').value || '12:00';
            const roomId = parseInt(document.getElementById('newRoomId').value);
            const pricePerNight = parseFloat(document.getElementById('newPricePerNight').value);
            const status = document.getElementById('newStatus').value;
            const lateCheckoutHours = calculateLateCheckoutHours(checkoutTime);
            const notes = document.getElementById('newNotes').value;

            if (!guestName) { showAlert('newResAlert', 'სახელი აუცილებელია!', 'error'); return; }
            if (checkoutDate <= checkinDate) { showAlert('newResAlert', 'Check-out უნდა იყოს Check-in-ის შემდეგ!', 'error'); return; }
            if (!checkRoomAvailability(roomId, checkinDate, checkoutDate)) { showAlert('newResAlert', 'ოთახი დაკავებულია ამ პერიოდზე!', 'error'); return; }

            const reservations = Storage.get('reservations', []);
            const nextId = Storage.get('nextReservationId', 1);
            reservations.push({
                id: nextId,
                guestName,
                guestPhone,
                roomId,
                checkinDate,
                checkoutDate,
                checkinTime,
                checkoutTime,
                numGuests: 1,
                notes,
                status,
                pricePerNight,
                lateCheckoutHours,
                extraBed: false,
                createdAt: new Date().toISOString()
            });
            Storage.set('reservations', reservations);
            Storage.set('nextReservationId', nextId + 1);
            closeModal('reservationModal');
            renderReservations();
            renderCalendar();
        }

        function saveReservationFromAccordion(resId) {
            const reservations = Storage.get('reservations', []);
            const index = reservations.findIndex(r => r.id === resId);
            if (index === -1) return;

            const guestName = document.getElementById(`guestName${resId}`).value.trim();
            const guestPhone = document.getElementById(`guestPhone${resId}`).value.trim();
            const guestEmail = document.getElementById(`guestEmail${resId}`).value.trim();
            const guestIdNumber = document.getElementById(`guestIdNumber${resId}`).value.trim();
            const guestCitizenship = document.getElementById(`guestCitizenship${resId}`).value.trim();
            const guestBirthDate = document.getElementById(`guestBirthDate${resId}`).value;
            const numGuests = parseInt(document.getElementById(`numGuests${resId}`).value);
            const checkinDate = document.getElementById(`checkinDate${resId}`).value;
            const checkoutDate = document.getElementById(`checkoutDate${resId}`).value;
            const checkinTime = document.getElementById(`checkinTime${resId}`).value || '14:00';
            const checkoutTime = document.getElementById(`checkoutTime${resId}`).value || '12:00';
            const lateCheckoutHours = calculateLateCheckoutHours(checkoutTime);
            const extraBed = document.getElementById(`extraBed${resId}`).checked;
            const status = document.getElementById(`status${resId}`).value;
            const pricePerNight = parseFloat(document.getElementById(`pricePerNight${resId}`).value);
            const notes = document.getElementById(`notes${resId}`).value;

            if (!guestName) { showAlert(`resAlert${resId}`, 'სახელი აუცილებელია!', 'error'); return; }
            if (checkoutDate <= checkinDate) { showAlert(`resAlert${resId}`, 'Check-out უნდა იყოს Check-in-ის შემდეგ!', 'error'); return; }

            if (!checkRoomAvailability(reservations[index].roomId, checkinDate, checkoutDate, resId)) {
                showAlert(`resAlert${resId}`, 'ოთახი დაკავებულია ამ პერიოდზე!', 'error');
                return;
            }

            reservations[index] = { ...reservations[index],
                guestName, guestPhone, guestEmail, guestIdNumber, guestCitizenship, guestBirthDate,
                numGuests, checkinDate, checkoutDate, checkinTime, checkoutTime, lateCheckoutHours,
                extraBed, status, pricePerNight, notes
            };

            Storage.set('reservations', reservations);
            showAlert(`resAlert${resId}`, 'განახლებულია!', 'success');
            renderCalendar();
            renderReservations();
        }

        function deleteReservation(resId) {
            if (!confirm('ნამდვილად გსურთ ჯავშნის წაშლა?')) return;
            const reservations = Storage.get('reservations', []);
            Storage.set('reservations', reservations.filter(r => r.id !== resId));
            renderReservations();
            renderCalendar();
        }

        function getReservationFinancials(resId) {
            const reservations = Storage.get('reservations', []);
            const res = reservations.find(r => r.id === resId);
            if (!res) return { nights: 0, baseTotal: 0, lateCheckoutFee: 0, total: 0 };
            const nights = calculateNights(res.checkinDate, res.checkoutDate);
            const baseTotal = nights * res.pricePerNight;
            const lateHours = res.lateCheckoutHours !== undefined
                ? res.lateCheckoutHours
                : calculateLateCheckoutHours(res.checkoutTime || '12:00');
            const lateCheckoutFee = Math.max(0, lateHours || 0) * LATE_CHECKOUT_RATE;
            return { nights, baseTotal, lateCheckoutFee, total: baseTotal + lateCheckoutFee };
        }
        function printInvoice(resId) {
            const reservations = Storage.get('reservations', []);
            const rooms = Storage.get('rooms', []);
            const res = reservations.find(r => r.id === resId);
            if (!res) return;
            const room = rooms.find(r => r.id === res.roomId);
            const financials = getReservationFinancials(resId);
            const invoiceNo = `INV-${res.id}-${new Date().getTime()}`;
            const cinTime = res.checkinTime || '14:00';
            const coutTime = res.checkoutTime || '12:00';
            const lateHours = calculateLateCheckoutHours(coutTime);

            const w = window.open('', '_blank');
            if (!w) return;
            w.document.write(`
                <!DOCTYPE html>
                <html lang="ka">
                <head>
                    <meta charset="UTF-8">
                    <title>ინვოისი ${invoiceNo}</title>
                    <style>
                        body { font-family: 'Roboto', sans-serif; padding: 32px; color: #0f172a; }
                        h1 { margin: 0 0 8px; }
                        .muted { color: #64748b; }
                        .row { display: flex; justify-content: space-between; gap: 16px; }
                        .box { border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-top: 16px; }
                        table { width: 100%; border-collapse: collapse; margin-top: 12px; }
                        th, td { padding: 10px; border-bottom: 1px solid #e2e8f0; text-align: left; }
                        th { background: #f1f5f9; }
                        .total { font-size: 18px; font-weight: 700; }
                        .right { text-align: right; }
                        @media print { .no-print { display: none; } }
                    </style>
                </head>
                <body>
                    <div class="row">
                        <div>
                            <h1>სასტუმრო — ინვოისი</h1>
                            <div class="muted">ინვოისის №: ${invoiceNo}</div>
                            <div class="muted">თარიღი: ${formatDate(new Date())}</div>
                        </div>
                        <div class="right">
                            <div class="muted">სტატუსი: ${res.status}</div>
                        </div>
                    </div>

                    <div class="box">
                        <div><strong>სტუმარი:</strong> ${res.guestName}</div>
                        <div><strong>ტელეფონი:</strong> ${res.guestPhone || '-'}</div>
                        <div><strong>ოთახი:</strong> ${room ? (room.roomName || room.roomNumber) : '-' } (${room ? room.roomType : '-'})</div>
                        <div><strong>თარიღები:</strong> ${res.checkinDate} ${cinTime} — ${res.checkoutDate} ${coutTime}</div>
                    </div>

                    <div class="box">
                        <table>
                            <thead>
                                <tr>
                                    <th>აღწერა</th>
                                    <th class="right">რაოდენობა</th>
                                    <th class="right">ფასი</th>
                                    <th class="right">ჯამი</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>სასტუმრო — ღამეები</td>
                                    <td class="right">${financials.nights}</td>
                                    <td class="right">${res.pricePerNight}₾</td>
                                    <td class="right">${financials.baseTotal}₾</td>
                                </tr>
                                <tr>
                                    <td>ლეით ჩექაუთი (${lateHours} სთ, 10₾/სთ)</td>
                                    <td class="right">${lateHours}</td>
                                    <td class="right">${LATE_CHECKOUT_RATE}₾</td>
                                    <td class="right">${financials.lateCheckoutFee}₾</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="row" style="margin-top: 12px;">
                            <div></div>
                            <div class="total">სულ: ${financials.total}₾</div>
                        </div>
                    </div>

                    <div class="no-print" style="margin-top: 16px;">
                        <button onclick="window.print()">ბეჭდვა</button>
                    </div>
                </body>
                </html>
            `);
            w.document.close();
            w.focus();
        }
        function printConsent(resId) {
            const reservations = Storage.get('reservations', []);
            const rooms = Storage.get('rooms', []);
            const res = reservations.find(r => r.id === resId);
            if (!res) return;
            const room = rooms.find(r => r.id === res.roomId);
            const cinTime = res.checkinTime || '14:00';
            const coutTime = res.checkoutTime || '12:00';

            const w = window.open('', '_blank');
            if (!w) return;
            w.document.write(`
                <!DOCTYPE html>
                <html lang="ka">
                <head>
                    <meta charset="UTF-8">
                    <title>სტუმრის თანხმობა</title>
                    <style>
                        body { font-family: 'Roboto', sans-serif; padding: 32px; color: #0f172a; }
                        .consent-form { padding: 20px; border: 1px solid #e2e8f0; }
                        h3 { text-align: center; margin-bottom: 16px; }
                        p { margin-bottom: 10px; line-height: 1.5; }
                        .row { display: flex; justify-content: space-between; margin-top: 24px; }
                        .line { border-bottom: 1px solid #0f172a; width: 220px; height: 20px; }
                        @media print { .no-print { display: none; } }
                    </style>
                </head>
                <body>
                    <div class="consent-form">
                        <h3>სტუმრის თანხმობის ფორმა</h3>
                        <p>მე, ქვემოთ ხელმომწერი, ვადასტურებ რომ გავეცანი სასტუმროს წესებს და ვეთანხმები პირობებს.</p>
                        <p><strong>სტუმარი:</strong> ${res.guestName}</p>
                        <p><strong>პირადი ნომერი/პასპორტი:</strong> ${res.guestIdNumber || '-'}</p>
                        <p><strong>ტელეფონი:</strong> ${res.guestPhone || '-'}</p>
                        <p><strong>ოთახი:</strong> ${room ? (room.roomName || room.roomNumber) : '-'} (${room ? room.roomType : '-'})</p>
                        <p><strong>ჩექინი:</strong> ${res.checkinDate} ${cinTime}</p>
                        <p><strong>ჩექაუთი:</strong> ${res.checkoutDate} ${coutTime}</p>
                        <p>ვეთანხმები დამატებით გადასახადებს (დამატებითი სერვისები, ლეით ჩექაუთი და ა.შ.).</p>

                        <div class="row">
                            <div>
                                <div class="line"></div>
                                <div>სტუმრის ხელმოწერა</div>
                            </div>
                            <div>
                                <div class="line"></div>
                                <div>თარიღი</div>
                            </div>
                        </div>
                    </div>
                    <div class="no-print" style="margin-top: 16px;">
                        <button onclick="window.print()">ბეჭდვა</button>
                    </div>
                </body>
                </html>
            `);
            w.document.close();
            w.focus();
        }

        function renderRooms() {
            const rooms = Storage.get('rooms', []);
            let html = `
                <div class="card">
                    <h2>ოთახები (${rooms.length} ცალი)</h2>
                    <div class="form-row mb-20">
                        <div class="form-group"><label>ოთახის ნომერი *</label><input type="text" id="newRoomNumber"></div>
                        <div class="form-group"><label>ოთახის სახელი</label><input type="text" id="newRoomName"></div>
                        <div class="form-group"><label>ტიპი</label>
                            <select id="newRoomType">
                                <option value="Single">Single</option>
                                <option value="Double">Double</option>
                                <option value="Triple">Triple</option>
                                <option value="Family">Family</option>
                                <option value="Suite">Suite</option>
                            </select>
                        </div>
                        <div class="form-group"><label>ფასი (₾)</label><input type="number" id="newRoomPrice" value="0" min="0" step="10"></div>
                        <div class="form-group"><label>სტატუსი</label>
                            <select id="newRoomStatus">
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                <option value="Out of service">Out of service</option>
                            </select>
                        </div>
                        <div class="form-group"><label>დასუფთავება</label>
                            <select id="newRoomCleaning">
                                <option value="Clean">Clean</option>
                                <option value="Dirty">Dirty</option>
                                <option value="In progress">In progress</option>
                            </select>
                        </div>
                        <div class="form-group"><label>Extra Bed?</label>
                            <select id="newRoomExtra">
                                <option value="false">No</option>
                                <option value="true">Yes</option>
                            </select>
                        </div>
                        <div class="form-group"><label>Extra Bed ფასი (₾)</label><input type="number" id="newRoomExtraPrice" value="0" min="0" step="5"></div>
                        <div class="form-group">
                            <label>&nbsp;</label>
                            <button class="btn btn-success btn-block" onclick="addRoom()">ოთახის დამატება</button>
                        </div>
                    </div>
                    <div class="table-container">
                        <table>
                            <thead><tr><th>ნომერი</th><th>სახელი</th><th>ტიპი</th><th>ფასი</th><th>სტატუსი</th><th>დასუფთავება</th><th>Extra Bed</th><th>Extra Bed ფასი</th><th>ქმედება</th></tr></thead>
                            <tbody>
                                ${rooms.map(r => `
                                    <tr>
                                        <td><input type="text" id="roomNumber${r.id}" value="${r.roomNumber}"></td>
                                        <td><input type="text" id="roomName${r.id}" value="${r.roomName || ''}"></td>
                                        <td>
                                            <select id="roomType${r.id}">
                                                <option value="Single" ${r.roomType === 'Single' ? 'selected' : ''}>Single</option>
                                                <option value="Double" ${r.roomType === 'Double' ? 'selected' : ''}>Double</option>
                                                <option value="Triple" ${r.roomType === 'Triple' ? 'selected' : ''}>Triple</option>
                                                <option value="Family" ${r.roomType === 'Family' ? 'selected' : ''}>Family</option>
                                                <option value="Suite" ${r.roomType === 'Suite' ? 'selected' : ''}>Suite</option>
                                            </select>
                                        </td>
                                        <td><input type="number" id="roomPrice${r.id}" value="${r.basePrice}" min="0" step="10"></td>
                                        <td>
                                            <select id="roomStatus${r.id}">
                                                <option value="Active" ${r.status === 'Active' ? 'selected' : ''}>Active</option>
                                                <option value="Inactive" ${r.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
                                                <option value="Out of service" ${r.status === 'Out of service' ? 'selected' : ''}>Out of service</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select id="roomCleaning${r.id}">
                                                <option value="Clean" ${r.cleaningStatus === 'Clean' ? 'selected' : ''}>Clean</option>
                                                <option value="Dirty" ${r.cleaningStatus === 'Dirty' ? 'selected' : ''}>Dirty</option>
                                                <option value="In progress" ${r.cleaningStatus === 'In progress' ? 'selected' : ''}>In progress</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select id="roomExtra${r.id}">
                                                <option value="false" ${!r.extraBedAvailable ? 'selected' : ''}>No</option>
                                                <option value="true" ${r.extraBedAvailable ? 'selected' : ''}>Yes</option>
                                            </select>
                                        </td>
                                        <td><input type="number" id="roomExtraPrice${r.id}" value="${r.extraBedPrice || 0}" min="0" step="5"></td>
                                        <td><button class="btn btn-primary" onclick="saveRoom(${r.id})">შენახვა</button></td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
            document.getElementById('roomsPage').innerHTML = html;
        }

        function renderReports() {
            const reservations = Storage.get('reservations', []);
            const rooms = Storage.get('rooms', []);
            const totalRevenue = reservations.reduce((sum, r) => sum + getReservationFinancials(r.id).total, 0);
            const occupied = reservations.filter(r => r.status === 'Checked-in').length;

            let html = `
                <div class="card">
                    <h2>მოკლე ანგარიში</h2>
                    <div class="stats-grid">
                        <div class="stat-card"><div class="label">💵 საერთო შემოსავალი</div><div class="value">${totalRevenue}₾</div></div>
                        <div class="stat-card"><div class="label">🛏 აქტიური ჯავშნები</div><div class="value">${reservations.length}</div></div>
                        <div class="stat-card"><div class="label">✅ დასახლებული</div><div class="value">${occupied}</div></div>
                        <div class="stat-card"><div class="label">🏨 ოთახები</div><div class="value">${rooms.length}</div></div>
                    </div>
                </div>
            `;
            document.getElementById('reportsPage').innerHTML = html;
        }

        function renderSettings() {
            const html = `
                <div class="card">
                    <h2>პარამეტრები</h2>
                    <div class="form-row">
                        <div class="form-group">
                            <label>მიმდინარე პაროლი</label>
                            <input type="password" id="currentPassword">
                        </div>
                        <div class="form-group">
                            <label>ახალი პაროლი</label>
                            <input type="password" id="newPassword">
                        </div>
                        <div class="form-group">
                            <label>გაიმეორე ახალი პაროლი</label>
                            <input type="password" id="confirmPassword">
                        </div>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-primary" onclick="changePassword()">პაროლის შეცვლა</button>
                    </div>
                    <div id="settingsAlert"></div>
                </div>
            `;
            document.getElementById('settingsPage').innerHTML = html;
        }

        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) modal.classList.remove('active');
        }
        function addRoom() {
            const roomNumber = document.getElementById('newRoomNumber').value.trim();
            const roomName = document.getElementById('newRoomName').value.trim();
            const roomType = document.getElementById('newRoomType').value;
            const basePrice = parseFloat(document.getElementById('newRoomPrice').value) || 0;
            const status = document.getElementById('newRoomStatus').value;
            const cleaningStatus = document.getElementById('newRoomCleaning').value;
            const extraBedAvailable = document.getElementById('newRoomExtra').value === 'true';
            const extraBedPrice = parseFloat(document.getElementById('newRoomExtraPrice').value) || 0;

            if (!roomNumber) {
                alert('ოთახის ნომერი აუცილებელია!');
                return;
            }
            const rooms = Storage.get('rooms', []);
            const nextId = rooms.length ? Math.max(...rooms.map(r => r.id)) + 1 : 1;
            rooms.push({
                id: nextId,
                roomNumber,
                roomName: roomName || `Room ${roomNumber}`,
                roomType,
                basePrice,
                status,
                cleaningStatus,
                extraBedAvailable,
                extraBedPrice
            });
            Storage.set('rooms', rooms);
            renderRooms();
            renderCalendar();
        }
        function saveRoom(roomId) {
            const rooms = Storage.get('rooms', []);
            const idx = rooms.findIndex(r => r.id === roomId);
            if (idx === -1) return;

            const roomNumber = document.getElementById(`roomNumber${roomId}`).value.trim();
            const roomName = document.getElementById(`roomName${roomId}`).value.trim();
            const roomType = document.getElementById(`roomType${roomId}`).value;
            const basePrice = parseFloat(document.getElementById(`roomPrice${roomId}`).value) || 0;
            const status = document.getElementById(`roomStatus${roomId}`).value;
            const cleaningStatus = document.getElementById(`roomCleaning${roomId}`).value;
            const extraBedAvailable = document.getElementById(`roomExtra${roomId}`).value === 'true';
            const extraBedPrice = parseFloat(document.getElementById(`roomExtraPrice${roomId}`).value) || 0;

            if (!roomNumber) {
                alert('ოთახის ნომერი აუცილებელია!');
                return;
            }

            rooms[idx] = {
                ...rooms[idx],
                roomNumber,
                roomName: roomName || `Room ${roomNumber}`,
                roomType,
                basePrice,
                status,
                cleaningStatus,
                extraBedAvailable,
                extraBedPrice
            };
            Storage.set('rooms', rooms);
            renderRooms();
            renderCalendar();
        }
        function changePassword() {
            const currentPassword = document.getElementById('currentPassword').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const currentUser = Storage.get('currentUser');
            const users = Storage.get('users', []);
            const userIndex = users.findIndex(u => u.username === currentUser);
            if (userIndex === -1) {
                showAlert('settingsAlert', 'მომხმარებელი ვერ მოიძებნა', 'error');
                return;
            }
            if (users[userIndex].password !== currentPassword) {
                showAlert('settingsAlert', 'მიმდინარე პაროლი არასწორია', 'error');
                return;
            }
            if (!newPassword || newPassword.length < 4) {
                showAlert('settingsAlert', 'ახალი პაროლი მინ. 4 სიმბოლო', 'error');
                return;
            }
            if (newPassword !== confirmPassword) {
                showAlert('settingsAlert', 'პაროლები არ ემთხვევა', 'error');
                return;
            }
            users[userIndex].password = newPassword;
            Storage.set('users', users);
            showAlert('settingsAlert', 'პაროლი წარმატებით შეიცვალა', 'success');
            document.getElementById('currentPassword').value = '';
            document.getElementById('newPassword').value = '';
            document.getElementById('confirmPassword').value = '';
        }

        window.addEventListener('load', () => {
            initializeApp();
            const currentUser = Storage.get('currentUser');
            if (currentUser) {
                document.getElementById('loginContainer').classList.add('hidden');
                document.getElementById('appContainer').classList.remove('hidden');
                document.getElementById('currentUser').textContent = `მომხმარებელი: ${currentUser}`;
                showPage('dashboard');
            }
        });
    </script>
</body>
</html>
