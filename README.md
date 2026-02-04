<!DOCTYPE html>
<html lang="ka">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🏨 სასტუმროს მართვის სისტემა</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
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
        }
        body {
            font-family: 'Roboto', sans-serif;
            background: var(--light);
            color: var(--dark);
            line-height: 1.6;
        }
        .container {
            max-width: 1440px;
            margin: 0 auto;
            padding: 24px;
        }
        /* Login Page */
        .login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: var(--gradient);
        }
        .login-box {
            background: white;
            padding: 48px;
            border-radius: 16px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.15);
            width: 100%;
            max-width: 420px;
            transform: translateY(0);
            transition: transform 0.3s ease;
        }
        .login-box:hover {
            transform: translateY(-5px);
        }
        .login-box h1 {
            text-align: center;
            margin-bottom: 32px;
            color: var(--primary);
            font-size: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        /* Header */
        .header {
            background: white;
            padding: 24px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
            margin-bottom: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .header h1 {
            color: var(--primary);
            font-size: 28px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .user-info {
            display: flex;
            align-items: center;
            gap: 16px;
        }
        .user-info span {
            font-weight: 500;
            color: var(--secondary);
        }
        /* Navigation */
        .nav-tabs {
            display: flex;
            gap: 12px;
            margin-bottom: 24px;
            flex-wrap: wrap;
            background: white;
            padding: 12px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        .nav-tabs button {
            padding: 12px 28px;
            background: transparent;
            border: 2px solid transparent;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            transition: all 0.3s ease;
            color: var(--dark);
            display: flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .nav-tabs button:hover {
            background: var(--light);
            border-color: var(--primary);
            color: var(--primary);
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .nav-tabs button.active {
            background: var(--primary);
            color: white;
            border-color: var(--primary);
            box-shadow: 0 4px 12px rgba(59,130,246,0.3);
        }
        /* Cards */
        .card {
            background: white;
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
            margin-bottom: 24px;
            transition: transform 0.3s ease;
        }
        .card:hover {
            transform: translateY(-3px);
        }
        .card h2 {
            margin-bottom: 24px;
            color: var(--primary);
            font-size: 24px;
        }
        .card h3 {
            margin-bottom: 16px;
            color: var(--dark);
            font-size: 20px;
        }
        /* Stats Grid */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 24px;
            margin-bottom: 32px;
        }
        .stat-card {
            background: linear-gradient(135deg, #ffffff, #f8fafc);
            padding: 24px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .stat-card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }
        .stat-card .label {
            font-size: 16px;
            color: var(--secondary);
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        .stat-card .value {
            font-size: 36px;
            font-weight: bold;
            color: var(--primary);
        }
        /* Forms */
        .form-group {
            margin-bottom: 24px;
        }
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: var(--dark);
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid var(--border);
            border-radius: 8px;
            font-size: 16px;
            transition: all 0.3s ease;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        .form-group textarea {
            resize: vertical;
            min-height: 100px;
        }
        .form-row {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
        }
        /* Buttons */
        .btn {
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .btn-primary {
            background: var(--primary);
            color: white;
        }
        .btn-primary:hover {
            background: var(--primary-dark);
        }
        .btn-success {
            background: var(--success);
            color: white;
        }
        .btn-success:hover {
            background: #16a34a;
        }
        .btn-warning {
            background: var(--warning);
            color: white;
        }
        .btn-warning:hover {
            background: #ca8a04;
        }
        .btn-danger {
            background: var(--danger);
            color: white;
        }
        .btn-danger:hover {
            background: #dc2626;
        }
        .btn-secondary {
            background: var(--secondary);
            color: white;
        }
        .btn-secondary:hover {
            background: #475569;
        }
        .btn-group {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }
        .btn-block {
            width: 100%;
        }
        /* Tables */
        .table-container {
            overflow-x: auto;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        table {
            width: 100%;
            border-collapse: collapse;
            background: white;
        }
        table th,
        table td {
            padding: 16px;
            text-align: left;
            border-bottom: 1px solid var(--border);
        }
        table th {
            background: var(--calendar-header);
            font-weight: 600;
            color: var(--dark);
        }
        table tr:hover {
            background: rgba(59, 130, 246, 0.05);
        }
        /* CLOUDBEDS-STYLE CALENDAR */
        .calendar-wrapper {
            background: var(--calendar-bg);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        .calendar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 24px;
            background: var(--gradient);
            color: white;
        }
        .calendar-header h2 {
            margin: 0;
            font-size: 24px;
            font-weight: 500;
            text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        .calendar-nav {
            display: flex;
            gap: 12px;
        }
        .calendar-nav button {
            padding: 8px 20px;
            background: rgba(255,255,255,0.2);
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            color: white;
            transition: all 0.3s ease;
        }
        .calendar-nav button:hover {
            background: rgba(255,255,255,0.3);
        }
        .calendar-controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 24px;
            background: var(--calendar-header);
            border-bottom: 1px solid var(--calendar-border);
        }
        .calendar-legend {
            display: flex;
            gap: 24px;
            align-items: center;
            flex-wrap: wrap;
        }
        .legend-item {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: var(--secondary);
        }
        .legend-color {
            width: 24px;
            height: 24px;
            border-radius: 6px;
            border: 2px solid;
        }
        .legend-color.available {
            background: white;
            border-color: var(--calendar-border);
        }
        .legend-color.reserved {
            background: var(--reserved);
            border-color: var(--reserved-border);
        }
        .legend-color.checkedin {
            background: var(--checkedin);
            border-color: var(--checkedin-border);
        }
        .legend-color.checkout {
            background: var(--checkout);
            border-color: var(--checkout-border);
        }
        .calendar-grid {
            overflow-x: auto;
            background: white;
        }
        .calendar-table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            min-width: 1400px;
        }
        .calendar-table thead th {
            background: var(--calendar-header);
            padding: 16px 12px;
            text-align: center;
            font-size: 14px;
            font-weight: 600;
            color: var(--dark);
            border-bottom: 2px solid var(--calendar-border);
            border-right: 1px solid var(--calendar-border);
            position: sticky;
            top: 0;
            z-index: 10;
        }
        .calendar-table thead th:first-child {
            position: sticky;
            left: 0;
            z-index: 20;
            text-align: left;
            padding-left: 20px;
            min-width: 180px;
            background: var(--calendar-header);
            border-right: 2px solid var(--calendar-border);
        }
        .calendar-table thead th.weekend {
            background: #ffedd5;
            color: #ea580c;
        }
        .calendar-table tbody tr {
            border-bottom: 1px solid var(--calendar-border);
            transition: background 0.3s ease;
        }
        .calendar-table tbody tr:hover {
            background: #f8fafc;
        }
        .calendar-table tbody td {
            padding: 0;
            text-align: center;
            border-right: 1px solid var(--calendar-border);
            height: 60px;
            position: relative;
        }
        .calendar-table tbody td:first-child {
            position: sticky;
            left: 0;
            z-index: 5;
            background: white;
            padding: 16px 20px;
            text-align: left;
            font-weight: 600;
            color: var(--dark);
            border-right: 2px solid var(--calendar-border);
        }
        .calendar-table tbody tr:hover td:first-child {
            background: #f8fafc;
        }
        .calendar-cell {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;
            overflow: hidden;
        }
        .calendar-cell:hover {
            background: rgba(59, 130, 246, 0.1);
        }
        .calendar-cell.available {
            background: white;
        }
        .calendar-cell.reserved {
            background: var(--reserved);
            clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        }
        .calendar-cell.reserved.first {
            clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
        }
        .calendar-cell.reserved.middle {
            clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        }
        .calendar-cell.reserved.last {
            clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);
        }
        .calendar-cell.checkedin {
            background: var(--checkedin);
            clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        }
        .calendar-cell.checkedin.first {
            clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
        }
        .calendar-cell.checkedin.middle {
            clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        }
        .calendar-cell.checkedin.last {
            clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);
        }
        .calendar-cell.checkout {
            background: var(--checkout);
            clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        }
        .calendar-cell.checkout.first {
            clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
        }
        .calendar-cell.checkout.middle {
            clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        }
        .calendar-cell.checkout.last {
            clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);
        }
        .calendar-cell-content {
            font-size: 14px;
            font-weight: 600;
            color: var(--dark);
            text-align: center;
            width: 100%;
            padding: 4px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .calendar-cell.reserved .calendar-cell-content {
            color: #713f12;
        }
        .calendar-cell.checkedin .calendar-cell-content {
            color: #14532d;
        }
        .calendar-cell.checkout .calendar-cell-content {
            color: #991b1b;
        }
        .room-type-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
            margin-left: 12px;
            background: rgba(59, 130, 246, 0.1);
            color: var(--primary);
        }
        /* Reservation Info Modal */
        .reservation-info-modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border-radius: 12px;
            padding: 24px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.25);
            z-index: 1001;
            min-width: 300px;
            display: none;
        }
        .reservation-info-modal.show {
            display: block;
        }
        .reservation-info-modal h4 {
            margin: 0 0 12px 0;
            font-size: 18px;
            color: var(--dark);
        }
        .reservation-info-modal p {
            margin: 4px 0;
            font-size: 14px;
            color: var(--secondary);
        }
        .reservation-info-modal .btn-group {
            margin-top: 16px;
        }
        /* Overlay for Modal */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1000;
            display: none;
        }
        .modal-overlay.show {
            display: block;
        }
        /* Alerts */
        .alert {
            padding: 16px;
            border-radius: 8px;
            margin-bottom: 24px;
            font-weight: 500;
        }
        .alert-success {
            background: rgba(34, 197, 94, 0.1);
            color: var(--success);
            border: 1px solid var(--success);
        }
        .alert-error {
            background: rgba(239, 68, 68, 0.1);
            color: var(--danger);
            border: 1px solid var(--danger);
        }
        .alert-warning {
            background: rgba(234, 179, 8, 0.1);
            color: var(--warning);
            border: 1px solid var(--warning);
        }
        .alert-info {
            background: rgba(59, 130, 246, 0.1);
            color: var(--primary);
            border: 1px solid var(--primary);
        }
        /* Modal */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.6);
            z-index: 1000;
            overflow-y: auto;
            transition: opacity 0.3s ease;
        }
        .modal.active {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 24px;
            opacity: 1;
        }
        .modal-content {
            background: white;
            border-radius: 16px;
            padding: 32px;
            max-width: 860px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            transform: scale(0.95);
            transition: transform 0.3s ease;
        }
        .modal.active .modal-content {
            transform: scale(1);
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
        }
        .modal-header h2 {
            margin: 0;
            color: var(--primary);
        }
        .close-modal {
            background: none;
            border: none;
            font-size: 32px;
            cursor: pointer;
            color: var(--secondary);
            transition: color 0.3s ease;
        }
        .close-modal:hover {
            color: var(--danger);
        }
        /* Status Badges */
        .badge {
            padding: 6px 16px;
            border-radius: 24px;
            font-size: 14px;
            font-weight: 500;
            display: inline-block;
        }
        .badge-reserved {
            background: rgba(234, 179, 8, 0.1);
            color: var(--warning);
        }
        .badge-checkedin {
            background: rgba(34, 197, 94, 0.1);
            color: var(--success);
        }
        .badge-checkedout {
            background: rgba(226, 232, 240, 0.5);
            color: var(--secondary);
        }
        .badge-cancelled {
            background: rgba(239, 68, 68, 0.1);
            color: var(--danger);
        }
        .badge-noshow {
            background: rgba(243, 244, 246, 0.5);
            color: var(--dark);
        }
        /* Accordion */
        .accordion-item {
            border: 1px solid var(--border);
            border-radius: 12px;
            margin-bottom: 12px;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        .accordion-item:hover {
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .accordion-header {
            padding: 20px;
            background: var(--light);
            cursor: pointer;
            font-weight: 500;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background 0.3s ease;
        }
        .accordion-header:hover {
            background: #e0e7ff;
        }
        .accordion-content {
            padding: 24px;
            display: none;
            background: white;
        }
        .accordion-content.active {
            display: block;
        }
        /* Utilities */
        .hidden {
            display: none !important;
        }
        .text-center {
            text-align: center;
        }
        .mt-20 {
            margin-top: 20px;
        }
        .mb-20 {
            margin-bottom: 20px;
        }
        /* Responsive */
        @media (max-width: 768px) {
            .header {
                flex-direction: column;
                gap: 16px;
            }
            .nav-tabs button {
                flex: 1;
                min-width: 140px;
            }
            .form-row {
                grid-template-columns: 1fr;
            }
            .stats-grid {
                grid-template-columns: 1fr;
            }
            .calendar-controls {
                flex-direction: column;
                gap: 16px;
                align-items: flex-start;
            }
        }
    </style>
</head>
<body>
    <!-- Login Container -->
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
    <!-- Main App Container -->
    <div id="appContainer" class="hidden">
        <div class="container">
            <!-- Header -->
            <div class="header">
                <h1>🏨 სასტუმროს მართვის სისტემა</h1>
                <div class="user-info">
                    <span id="currentUser"></span>
                    <button class="btn btn-secondary" onclick="logout()">გასვლა</button>
                </div>
            </div>
            <!-- Navigation -->
            <div class="nav-tabs">
                <button class="active" onclick="showPage('dashboard')">📊 დაშბორდი</button>
                <button onclick="showPage('calendar')">📅 კალენდარი</button>
                <button onclick="showPage('reservations')">📋 ჯავშნები</button>
                <button onclick="showPage('rooms')">🚪 ოთახები</button>
                <button onclick="showPage('reports')">📈 ანგარიშები</button>
                <button onclick="showPage('settings')">⚙️ პარამეტრები</button>
            </div>
            <!-- Pages -->
            <div id="dashboardPage" class="page"></div>
            <div id="calendarPage" class="page hidden"></div>
            <div id="reservationsPage" class="page hidden"></div>
            <div id="roomsPage" class="page hidden"></div>
            <div id="reportsPage" class="page hidden"></div>
            <div id="settingsPage" class="page hidden"></div>
        </div>
    </div>
    <!-- Reservation Info Modal -->
    <div id="reservationInfoModal" class="reservation-info-modal">
        <h4 id="infoGuestName"></h4>
        <p id="infoPhone"></p>
        <p id="infoDates"></p>
        <p id="infoNights"></p>
        <p id="infoStatus"></p>
        <div class="btn-group">
            <button class="btn btn-primary" id="editReservationBtn">რედაქტირება</button>
            <button class="btn btn-secondary" onclick="closeInfoModal()">დახურვა</button>
        </div>
    </div>
    <div id="modalOverlay" class="modal-overlay" onclick="closeInfoModal()"></div>
    <!-- Modals -->
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
        // ================== DATA STORAGE ==================
        class Storage {
            static get(key, defaultValue = null) {
                try {
                    const data = localStorage.getItem(key);
                    return data ? JSON.parse(data) : defaultValue;
                } catch (e) {
                    console.error('LocalStorage get error:', e);
                    return defaultValue;
                }
            }
            static set(key, value) {
                try {
                    localStorage.setItem(key, JSON.stringify(value));
                } catch (e) {
                    console.error('LocalStorage set error:', e);
                }
            }
            static remove(key) {
                try {
                    localStorage.removeItem(key);
                } catch (e) {
                    console.error('LocalStorage remove error:', e);
                }
            }
        }
        // ================== INITIALIZATION ==================
        function initializeApp() {
            try {
                if (!Storage.get('initialized')) {
                    // Create default admin user
                    Storage.set('users', [{
                        username: 'admin',
                        password: 'admin123' // In production, use hashed passwords
                    }]);
                    // Create 12 rooms
                    const rooms = [];
                    for (let i = 101; i <= 112; i++) {
                        let type, price;
                        if (i <= 104) {
                            type = 'Single';
                            price = 80;
                        } else if (i <= 108) {
                            type = 'Double';
                            price = 120;
                        } else if (i <= 110) {
                            type = 'Triple';
                            price = 150;
                        } else {
                            type = 'Family';
                            price = 200;
                        }
                        rooms.push({
                            id: i - 100,
                            roomNumber: String(i),
                            roomType: type,
                            basePrice: price,
                            status: 'Active',
                            cleaningStatus: 'Clean'
                        });
                    }
                    Storage.set('rooms', rooms);
                    // Create seed reservations
                    const today = new Date();
                    const reservations = [
                        {
                            id: 1,
                            guestName: 'გიორგი მელაძე',
                            guestPhone: '555123456',
                            guestEmail: 'giorgi@mail.ge',
                            roomId: 1,
                            checkinDate: formatDate(addDays(today, -2)),
                            checkoutDate: formatDate(addDays(today, 1)),
                            numGuests: 1,
                            notes: '',
                            status: 'Checked-in',
                            pricePerNight: 80,
                            lateCheckoutHours: 0,
                            createdAt: new Date().toISOString()
                        },
                        {
                            id: 2,
                            guestName: 'ნინო ბერიძე',
                            guestPhone: '555234567',
                            guestEmail: '',
                            roomId: 3,
                            checkinDate: formatDate(addDays(today, 1)),
                            checkoutDate: formatDate(addDays(today, 4)),
                            numGuests: 2,
                            notes: '',
                            status: 'Reserved',
                            pricePerNight: 80,
                            lateCheckoutHours: 0,
                            createdAt: new Date().toISOString()
                        },
                        {
                            id: 3,
                            guestName: 'დავით კაცია',
                            guestPhone: '555345678',
                            guestEmail: 'dato@mail.ge',
                            roomId: 5,
                            checkinDate: formatDate(addDays(today, 5)),
                            checkoutDate: formatDate(addDays(today, 8)),
                            numGuests: 2,
                            notes: '',
                            status: 'Reserved',
                            pricePerNight: 120,
                            lateCheckoutHours: 0,
                            createdAt: new Date().toISOString()
                        },
                        {
                            id: 4,
                            guestName: 'ანა გიორგაძე',
                            guestPhone: '555456789',
                            guestEmail: 'ana@mail.ge',
                            roomId: 7,
                            checkinDate: formatDate(addDays(today, 0)),
                            checkoutDate: formatDate(addDays(today, 3)), // Fixed to make it valid
                            numGuests: 1,
                            notes: '',
                            status: 'Checked-in',
                            pricePerNight: 120,
                            lateCheckoutHours: 0,
                            createdAt: new Date().toISOString()
                        }
                    ];
                    Storage.set('reservations', reservations);
                    Storage.set('nextReservationId', 5);
                    // Payments
                    Storage.set('payments', []);
                    Storage.set('nextPaymentId', 1);
                    Storage.set('initialized', true);
                }
            } catch (e) {
                console.error('Initialization error:', e);
                showAlert('loginAlert', 'სისტემის ინიციალიზაციის შეცდომა. სცადეთ გადატვირთვა.', 'error');
            }
        }
        // ================== HELPER FUNCTIONS ==================
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
        function showAlert(containerId, message, type = 'success') {
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
                setTimeout(() => {
                    container.innerHTML = '';
                }, 3000);
            } else {
                console.warn('Alert container not found:', containerId);
            }
        }
        function isWeekend(date) {
            const d = new Date(date);
            const day = d.getDay();
            return day === 0 || day === 6; // Sunday or Saturday
        }
        // ================== AUTHENTICATION ==================
        function login() {
            try {
                const username = document.getElementById('loginUsername').value;
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
            } catch (e) {
                console.error('Login error:', e);
                showAlert('loginAlert', 'შესვლის შეცდომა. სცადეთ გადატვირთვა.', 'error');
            }
        }
        function logout() {
            Storage.remove('currentUser');
            document.getElementById('loginContainer').classList.remove('hidden');
            document.getElementById('appContainer').classList.add('hidden');
            document.getElementById('loginPassword').value = '';
        }
        // ================== NAVIGATION ==================
        function showPage(pageName) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
           
            // Remove active from all tabs
            document.querySelectorAll('.nav-tabs button').forEach(btn => btn.classList.remove('active'));
           
            // Show selected page
            const pageElement = document.getElementById(`${pageName}Page`);
            if (pageElement) {
                pageElement.classList.remove('hidden');
            }
           
            // Set active tab
            if (event && event.target) {
                event.target.classList.add('active');
            }
           
            // Render page
            switch(pageName) {
                case 'dashboard':
                    renderDashboard();
                    break;
                case 'calendar':
                    renderCalendar();
                    break;
                case 'reservations':
                    renderReservations();
                    break;
                case 'rooms':
                    renderRooms();
                    break;
                case 'reports':
                    renderReports();
                    break;
                case 'settings':
                    renderSettings();
                    break;
            }
            // Check for hash to open specific reservation
            if (pageName === 'reservations') {
                const hash = window.location.hash;
                if (hash.startsWith('#res')) {
                    const id = parseInt(hash.substring(4));
                    openReservationAccordion(id);
                    window.location.hash = '';
                }
            }
        }
        // ================== DASHBOARD ==================
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
                    <div class="stat-card">
                        <div class="label">🛬 დღევანდელი ჩასახლებები</div>
                        <div class="value">${arrivals}</div>
                    </div>
                    <div class="stat-card">
                        <div class="label">🛫 დღევანდელი გასახლებები</div>
                        <div class="value">${departures}</div>
                    </div>
                    <div class="stat-card">
                        <div class="label">🏠 ამჟამად დასახლებული</div>
                        <div class="value">${inHouse}</div>
                    </div>
                    <div class="stat-card">
                        <div class="label">🆓 თავისუფალი ოთახები</div>
                        <div class="value">${available}</div>
                    </div>
                </div>
                <div class="card">
                    <h3>დღევანდელი ჩასახლებები</h3>
                    ${arrivalsToday.length > 0 ? `
                        <div class="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>სტუმარი</th>
                                        <th>ტელეფონი</th>
                                        <th>ოთახი</th>
                                        <th>სტატუსი</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${arrivalsToday.map(r => {
                                        const room = rooms.find(rm => rm.id === r.roomId);
                                        return `
                                            <tr>
                                                <td>${r.guestName}</td>
                                                <td>${r.guestPhone || '-'}</td>
                                                <td>${room ? room.roomNumber : '-'}</td>
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
                                    <tr>
                                        <th>სტუმარი</th>
                                        <th>ტელეფონი</th>
                                        <th>ოთახი</th>
                                        <th>სტატუსი</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${departuresToday.map(r => {
                                        const room = rooms.find(rm => rm.id === r.roomId);
                                        return `
                                            <tr>
                                                <td>${r.guestName}</td>
                                                <td>${r.guestPhone || '-'}</td>
                                                <td>${room ? room.roomNumber : '-'}</td>
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
        // ================== CALENDAR ==================
        let currentCalendarDate = new Date();
        function renderCalendar() {
            const year = currentCalendarDate.getFullYear();
            const month = currentCalendarDate.getMonth();
            const monthNames = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი',
                               'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'];
           
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const rooms = Storage.get('rooms', []);
            const reservations = Storage.get('reservations', []);
            // Build calendar table
            let calendarTable = `
                <table class="calendar-table">
                    <thead>
                        <tr>
                            <th>ოთახი</th>
            `;
            // Add day headers
            for (let day = 1; day <= daysInMonth; day++) {
                const currentDate = new Date(year, month, day);
                const isWeekendDay = isWeekend(currentDate);
                calendarTable += `<th class="${isWeekendDay ? 'weekend' : ''}">${day}</th>`;
            }
            calendarTable += `
                        </tr>
                    </thead>
                    <tbody>
            `;
            // Build rows for each room
            rooms.forEach(room => {
                calendarTable += `<tr>
                    <td>${room.roomNumber}<span class="room-type-badge">${room.roomType}</span></td>`;
               
                for (let day = 1; day <= daysInMonth; day++) {
                    const currentDateStr = formatDate(new Date(year, month, day));
                    const currentDate = new Date(currentDateStr);
                   
                    // Find reservation for this room and date
                    let reservation = reservations.find(r =>
                        r.roomId === room.id &&
                        r.status !== 'Cancelled' &&
                        new Date(r.checkinDate) <= currentDate &&
                        new Date(r.checkoutDate) > currentDate
                    );
                    let cellClass = 'calendar-cell available';
                    let cellContent = '';
                    let tooltipData = '';
                    let isCheckoutToday = false;
                    let position = '';
                    if (!reservation) {
                        // Check if it's checkout day without overlapping reservation
                        reservation = reservations.find(r =>
                            r.roomId === room.id &&
                            r.status === 'Checked-in' &&
                            r.checkoutDate === currentDateStr
                        );
                        if (reservation) {
                            isCheckoutToday = true;
                        }
                    }
                    if (reservation) {
                        const isFirstDay = reservation.checkinDate === currentDateStr;
                        const isLastDay = formatDate(addDays(new Date(reservation.checkoutDate), -1)) === currentDateStr;
                        const isSingleDay = isFirstDay && isLastDay;
                        if (isCheckoutToday) {
                            cellClass = 'calendar-cell checkout';
                            position = isFirstDay ? 'first' : 'last';
                        } else if (reservation.status === 'Checked-in') {
                            cellClass = 'calendar-cell checkedin';
                        } else {
                            cellClass = 'calendar-cell reserved';
                        }
                        if (isSingleDay) {
                            position = 'first last';
                        } else if (isFirstDay) {
                            position = 'first';
                        } else if (isLastDay || isCheckoutToday) {
                            position = 'last';
                        } else {
                            position = 'middle';
                        }
                        cellClass += ` ${position}`;
                        // Show guest name only on first day
                        if (isFirstDay) {
                            cellContent = `<div class="calendar-cell-content">${reservation.guestName.split(' ')[0]}</div>`;
                        }
                        tooltipData = `data-reservation-id="${reservation.id}"`;
                    }
                    calendarTable += `<td>
                        <div class="${cellClass}" ${tooltipData} onclick="showReservationInfo(this)">
                            ${cellContent}
                        </div>
                    </td>`;
                }
               
                calendarTable += `</tr>`;
            });
            calendarTable += `</tbody></table>`;
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
                                <div class="legend-item">
                                    <div class="legend-color available"></div>
                                    <span>თავისუფალი</span>
                                </div>
                                <div class="legend-item">
                                    <div class="legend-color reserved"></div>
                                    <span>დაჯავშნილი</span>
                                </div>
                                <div class="legend-item">
                                    <div class="legend-color checkedin"></div>
                                    <span>დასახლებული</span>
                                </div>
                                <div class="legend-item">
                                    <div class="legend-color checkout"></div>
                                    <span>გასახლება</span>
                                </div>
                            </div>
                        </div>
                        <div class="calendar-grid">
                            ${calendarTable}
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
        function changeCalendarMonth(delta) {
            currentCalendarDate.setMonth(currentCalendarDate.getMonth() + delta);
            renderCalendar();
        }
        function goToToday() {
            currentCalendarDate = new Date();
            renderCalendar();
        }
        function showReservationInfo(element) {
            const reservationId = element.getAttribute('data-reservation-id');
            if (!reservationId) return;
            const reservations = Storage.get('reservations', []);
            const reservation = reservations.find(r => r.id === parseInt(reservationId));
            if (reservation) {
                document.getElementById('infoGuestName').textContent = reservation.guestName;
                document.getElementById('infoPhone').innerHTML = reservation.guestPhone ? `📞 ${reservation.guestPhone}` : '';
                document.getElementById('infoDates').innerHTML = `📅 ${reservation.checkinDate} - ${reservation.checkoutDate}`;
                document.getElementById('infoNights').innerHTML = `🌙 ${calculateNights(reservation.checkinDate, reservation.checkoutDate)} ღამე`;
                document.getElementById('infoStatus').innerHTML = `<span class="badge badge-${reservation.status.toLowerCase().replace('-', '')}">${reservation.status}</span>`;
                document.getElementById('editReservationBtn').onclick = function() {
                    closeInfoModal();
                    showPage('reservations');
                    window.location.hash = `#res${reservation.id}`;
                };
                document.getElementById('reservationInfoModal').classList.add('show');
                document.getElementById('modalOverlay').classList.add('show');
            }
        }
        function closeInfoModal() {
            document.getElementById('reservationInfoModal').classList.remove('show');
            document.getElementById('modalOverlay').classList.remove('show');
        }
        function checkAvailability() {
            const checkin = document.getElementById('availCheckIn').value;
            const checkout = document.getElementById('availCheckOut').value;
            if (!checkin || !checkout || checkout <= checkin) {
                document.getElementById('availabilityResults').innerHTML =
                    '<div class="alert alert-error">გთხოვთ აირჩიოთ სწორი თარიღები</div>';
                return;
            }
            const available = getAvailableRooms(checkin, checkout);
            const rooms = Storage.get('rooms', []);
            if (available.length > 0) {
                let html = `<div class="alert alert-success">თავისუფალია ${available.length} ოთახი:</div>
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr><th>ოთახი</th><th>ტიპი</th><th>ფასი</th></tr>
                            </thead>
                            <tbody>`;
               
                available.forEach(roomId => {
                    const room = rooms.find(r => r.id === roomId);
                    if (room) {
                        html += `<tr>
                            <td>${room.roomNumber}</td>
                            <td>${room.roomType}</td>
                            <td>${room.basePrice}₾</td>
                        </tr>`;
                    }
                });
                html += '</tbody></table></div>';
                document.getElementById('availabilityResults').innerHTML = html;
            } else {
                document.getElementById('availabilityResults').innerHTML =
                    '<div class="alert alert-warning">თავისუფალი ოთახები არ არის ამ პერიოდზე</div>';
            }
        }
        function getAvailableRooms(checkin, checkout) {
            const rooms = Storage.get('rooms', []);
            const reservations = Storage.get('reservations', []);
            return rooms
                .filter(r => r.status === 'Active')
                .filter(room => {
                    return !reservations.some(res =>
                        res.roomId === room.id &&
                        res.status !== 'Cancelled' &&
                        !(res.checkoutDate <= checkin || res.checkinDate >= checkout)
                    );
                })
                .map(r => r.id);
        }
        // ================== RESERVATIONS ==================
        function renderReservations() {
            const reservations = Storage.get('reservations', []);
            const rooms = Storage.get('rooms', []);
            const statusEmojis = {
                'Reserved': '🟡',
                'Checked-in': '🟢',
                'Checked-out': '⚪',
                'Cancelled': '🔴',
                'No-show': '⚫'
            };
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
            // Filter
            const statusFilter = document.getElementById('filterStatus') ? document.getElementById('filterStatus').value : '';
            const searchTerm = document.getElementById('searchTerm') ? document.getElementById('searchTerm').value.toLowerCase() : '';
            let filtered = reservations;
            if (statusFilter) {
                filtered = filtered.filter(r => r.status === statusFilter);
            }
            if (searchTerm) {
                filtered = filtered.filter(r => {
                    const room = rooms.find(rm => rm.id === r.roomId);
                    return r.guestName.toLowerCase().includes(searchTerm) ||
                           (r.guestPhone && r.guestPhone.includes(searchTerm)) ||
                           (room && room.roomNumber.includes(searchTerm));
                });
            }
            // Sort by checkin date descending
            filtered.sort((a, b) => new Date(b.checkinDate) - new Date(a.checkinDate));
            filtered.forEach(res => {
                const room = rooms.find(r => r.id === res.roomId);
                const nights = calculateNights(res.checkinDate, res.checkoutDate);
                const financials = getReservationFinancials(res.id);
                html += `
                    <div class="accordion-item" id="resAccordion${res.id}">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <span>${statusEmojis[res.status] || ''} ${res.guestName} - ოთახი ${room?.roomNumber || '-'} (${res.checkinDate} - ${res.checkoutDate})</span>
                            <span>▼</span>
                        </div>
                        <div class="accordion-content">
                            <div id="resAlert${res.id}"></div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label>სტუმრის სახელი *</label>
                                    <input type="text" id="guestName${res.id}" value="${res.guestName}">
                                </div>
                                <div class="form-group">
                                    <label>ტელეფონი</label>
                                    <input type="text" id="guestPhone${res.id}" value="${res.guestPhone || ''}">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label>ელფოსტა</label>
                                    <input type="email" id="guestEmail${res.id}" value="${res.guestEmail || ''}">
                                </div>
                                <div class="form-group">
                                    <label>სტუმრების რაოდენობა</label>
                                    <input type="number" id="numGuests${res.id}" value="${res.numGuests}" min="1">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label>Check-in *</label>
                                    <input type="date" id="checkinDate${res.id}" value="${res.checkinDate}">
                                </div>
                                <div class="form-group">
                                    <label>Check-out *</label>
                                    <input type="date" id="checkoutDate${res.id}" value="${res.checkoutDate}">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label>ლეით ჩექაუთ საათები</label>
                                    <input type="number" id="lateCheckoutHours${res.id}" value="${res.lateCheckoutHours || 0}" min="0">
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
                                <div class="form-group">
                                    <label>ფასი ღამეში (₾)</label>
                                    <input type="number" id="pricePerNight${res.id}" value="${res.pricePerNight}" min="0" step="10">
                                </div>
                            </div>
                            <div class="form-group">
                                <label>შენიშვნა</label>
                                <textarea id="notes${res.id}">${res.notes || ''}</textarea>
                            </div>
                            <h3>ფინანსური ინფორმაცია</h3>
                            <div class="stats-grid">
                                <div class="stat-card">
                                    <div class="label">ღამეები</div>
                                    <div class="value">${financials.nights}</div>
                                </div>
                                <div class="stat-card">
                                    <div class="label">სულ</div>
                                    <div class="value">${financials.subtotal}₾</div>
                                </div>
                                <div class="stat-card">
                                    <div class="label">გადახდილი</div>
                                    <div class="value">${financials.totalPaid}₾</div>
                                </div>
                                <div class="stat-card">
                                    <div class="label">დარჩენილი</div>
                                    <div class="value">${financials.balance}₾</div>
                                </div>
                            </div>
                            <h3>გადახდები</h3>
                            <div id="payments${res.id}">
                                ${renderPaymentsList(res.id)}
                            </div>
                            <h3>ახალი გადახდა</h3>
                            <div class="form-row">
                                <div class="form-group">
                                    <label>თანხა (₾)</label>
                                    <input type="number" id="paymentAmount${res.id}" min="0" step="10">
                                </div>
                                <div class="form-group">
                                    <label>მეთოდი</label>
                                    <select id="paymentMethod${res.id}">
                                        <option value="ნაღდი ანგარიში">ნაღდი ანგარიში</option>
                                        <option value="ბარათი">ბარათი</option>
                                        <option value="გადარიცხვა">გადარიცხვა</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>თარიღი</label>
                                    <input type="date" id="paymentDate${res.id}" value="${formatDate(new Date())}">
                                </div>
                            </div>
                            <button class="btn btn-success" onclick="addPayment(${res.id})">გადახდის დამატება</button>
                            <hr style="margin: 20px 0;">
                            <div class="btn-group">
                                <button class="btn btn-primary" onclick="updateReservation(${res.id})">განახლება</button>
                                ${res.status !== 'Cancelled' ? `
                                    <button class="btn btn-warning" onclick="cancelReservation(${res.id})">გაუქმება</button>
                                ` : ''}
                                <button class="btn btn-danger" onclick="deleteReservation(${res.id})">წაშლა</button>
                            </div>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            document.getElementById('reservationsPage').innerHTML = html;
            // Check hash after render
            const hash = window.location.hash;
            if (hash.startsWith('#res')) {
                const id = parseInt(hash.substring(4));
                openReservationAccordion(id);
                window.location.hash = '';
            }
        }
        function toggleAccordion(element) {
            const content = element.nextElementSibling;
            const isActive = content.classList.contains('active');
           
            // Close all accordions
            document.querySelectorAll('.accordion-content').forEach(ac => ac.classList.remove('active'));
           
            // Open clicked one if it wasn't active
            if (!isActive) {
                content.classList.add('active');
            }
        }
        function openReservationAccordion(id) {
            const accordion = document.getElementById(`resAccordion${id}`);
            if (accordion) {
                const header = accordion.querySelector('.accordion-header');
                if (header) {
                    toggleAccordion(header);
                }
            }
        }
        function renderPaymentsList(reservationId) {
            const payments = Storage.get('payments', []).filter(p => p.reservationId === reservationId);
            if (payments.length === 0) {
                return '<div class="alert alert-info">გადახდები არ არის</div>';
            }
            let html = `
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>თანხა</th>
                                <th>მეთოდი</th>
                                <th>თარიღი</th>
                                <th>შენიშვნა</th>
                            </tr>
                        </thead>
                        <tbody>
            `;
            payments.forEach(p => {
                html += `
                    <tr>
                        <td>${p.amount}₾</td>
                        <td>${p.paymentMethod}</td>
                        <td>${p.paymentDate}</td>
                        <td>${p.notes || '-'}</td>
                    </tr>
                `;
            });
            html += '</tbody></table></div>';
            return html;
        }
        function getReservationFinancials(reservationId) {
            const reservations = Storage.get('reservations', []);
            const reservation = reservations.find(r => r.id === reservationId);
            if (!reservation) {
                return { nights: 0, subtotal: 0, totalPaid: 0, balance: 0 };
            }
            const nights = calculateNights(reservation.checkinDate, reservation.checkoutDate);
            let subtotal = nights * reservation.pricePerNight;
            const lateFee = (reservation.lateCheckoutHours || 0) * 10;
            subtotal += lateFee;
            const payments = Storage.get('payments', []);
            const totalPaid = payments
                .filter(p => p.reservationId === reservationId)
                .reduce((sum, p) => sum + p.amount, 0);
            const balance = subtotal - totalPaid;
            return { nights, subtotal, totalPaid, balance };
        }
        function addPayment(reservationId) {
            const amount = parseFloat(document.getElementById(`paymentAmount${reservationId}`).value);
            const method = document.getElementById(`paymentMethod${reservationId}`).value;
            const date = document.getElementById(`paymentDate${reservationId}`).value;
            if (!amount || amount <= 0) {
                showAlert(`resAlert${reservationId}`, 'შეიყვანეთ თანხა', 'error');
                return;
            }
            const payments = Storage.get('payments', []);
            const nextId = Storage.get('nextPaymentId', 1);
            payments.push({
                id: nextId,
                reservationId: reservationId,
                amount: amount,
                paymentMethod: method,
                paymentDate: date,
                notes: ''
            });
            Storage.set('payments', payments);
            Storage.set('nextPaymentId', nextId + 1);
            showAlert(`resAlert${reservationId}`, 'გადახდა დამატებულია!', 'success');
           
            // Clear form
            document.getElementById(`paymentAmount${reservationId}`).value = '';
           
            // Update payments list
            document.getElementById(`payments${reservationId}`).innerHTML = renderPaymentsList(reservationId);
           
            // Update financials
            renderReservations();
        }
        function updateReservation(reservationId) {
            const guestName = document.getElementById(`guestName${reservationId}`).value;
            const guestPhone = document.getElementById(`guestPhone${reservationId}`).value;
            const guestEmail = document.getElementById(`guestEmail${reservationId}`).value;
            const numGuests = parseInt(document.getElementById(`numGuests${reservationId}`).value);
            const checkinDate = document.getElementById(`checkinDate${reservationId}`).value;
            const checkoutDate = document.getElementById(`checkoutDate${reservationId}`).value;
            const status = document.getElementById(`status${reservationId}`).value;
            const pricePerNight = parseFloat(document.getElementById(`pricePerNight${reservationId}`).value);
            const notes = document.getElementById(`notes${reservationId}`).value;
            const lateCheckoutHours = parseInt(document.getElementById(`lateCheckoutHours${reservationId}`).value);
            if (!guestName) {
                showAlert(`resAlert${reservationId}`, 'სახელი აუცილებელია!', 'error');
                return;
            }
            if (checkoutDate <= checkinDate) {
                showAlert(`resAlert${reservationId}`, 'Check-out უნდა იყოს Check-in-ის შემდეგ!', 'error');
                return;
            }
            const reservations = Storage.get('reservations', []);
            const index = reservations.findIndex(r => r.id === reservationId);
            if (index !== -1) {
                // Check room availability if dates changed
                const oldRes = reservations[index];
                if (checkinDate !== oldRes.checkinDate || checkoutDate !== oldRes.checkoutDate) {
                    if (!checkRoomAvailability(oldRes.roomId, checkinDate, checkoutDate, reservationId)) {
                        showAlert(`resAlert${reservationId}`, 'ოთახი დაკავებულია ამ პერიოდზე!', 'error');
                        return;
                    }
                }
                reservations[index] = {
                    ...reservations[index],
                    guestName,
                    guestPhone,
                    guestEmail,
                    numGuests,
                    checkinDate,
                    checkoutDate,
                    status,
                    pricePerNight,
                    notes,
                    lateCheckoutHours
                };
                // If checked out, set room to dirty
                if (status === 'Checked-out') {
                    const rooms = Storage.get('rooms', []);
                    const roomIndex = rooms.findIndex(r => r.id === reservations[index].roomId);
                    if (roomIndex !== -1) {
                        rooms[roomIndex].cleaningStatus = 'Dirty';
                        Storage.set('rooms', rooms);
                    }
                }
                Storage.set('reservations', reservations);
                showAlert(`resAlert${reservationId}`, 'განახლებულია!', 'success');
                setTimeout(() => renderReservations(), 1000);
            }
        }
        function cancelReservation(reservationId) {
            if (!confirm('დარწმუნებული ხართ რომ გსურთ ჯავშნის გაუქმება?')) return;
            const reservations = Storage.get('reservations', []);
            const index = reservations.findIndex(r => r.id === reservationId);
            if (index !== -1) {
                reservations[index].status = 'Cancelled';
                Storage.set('reservations', reservations);
                renderReservations();
            }
        }
        function deleteReservation(reservationId) {
            if (!confirm('დარწმუნებული ხართ რომ გსურთ ჯავშნის წაშლა?')) return;
            // Delete payments first
            let payments = Storage.get('payments', []);
            payments = payments.filter(p => p.reservationId !== reservationId);
            Storage.set('payments', payments);
            // Delete reservation
            let reservations = Storage.get('reservations', []);
            reservations = reservations.filter(r => r.id !== reservationId);
            Storage.set('reservations', reservations);
            renderReservations();
        }
        function checkRoomAvailability(roomId, checkin, checkout, excludeReservationId = null) {
            const reservations = Storage.get('reservations', []);
            return !reservations.some(r =>
                r.roomId === roomId &&
                r.id !== excludeReservationId &&
                r.status !== 'Cancelled' &&
                r.status !== 'Checked-out' &&
                !(r.checkoutDate <= checkin || r.checkinDate >= checkout)
            );
        }
        // ================== NEW RESERVATION MODAL ==================
        function openNewReservationModal() {
            const today = formatDate(new Date());
            const tomorrow = formatDate(addDays(new Date(), 1));
            document.getElementById('modalTitle').textContent = 'ახალი ჯავშანი';
            document.getElementById('modalBody').innerHTML = `
                <div id="newResAlert"></div>
                <div class="form-row">
                    <div class="form-group">
                        <label>სტუმრის სახელი *</label>
                        <input type="text" id="newGuestName">
                    </div>
                    <div class="form-group">
                        <label>ტელეფონი</label>
                        <input type="text" id="newGuestPhone">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>ელფოსტა</label>
                        <input type="email" id="newGuestEmail">
                    </div>
                    <div class="form-group">
                        <label>სტუმრების რაოდენობა</label>
                        <input type="number" id="newNumGuests" value="1" min="1">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Check-in *</label>
                        <input type="date" id="newCheckinDate" value="${today}" onchange="updateAvailableRoomsForNew()">
                    </div>
                    <div class="form-group">
                        <label>Check-out *</label>
                        <input type="date" id="newCheckoutDate" value="${tomorrow}" onchange="updateAvailableRoomsForNew()">
                    </div>
                </div>
                <div class="form-group">
                    <label>ოთახი *</label>
                    <select id="newRoomId">
                        <option value="">აირჩიეთ ოთახი...</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>ლეით ჩექაუთ საათები</label>
                    <input type="number" id="newLateCheckoutHours" value="0" min="0">
                </div>
                <div id="newRoomInfo"></div>
                <div class="form-group">
                    <label>შენიშვნა</label>
                    <textarea id="newNotes"></textarea>
                </div>
                <div class="btn-group">
                    <button class="btn btn-success" onclick="createReservation()">ჯავშნის შექმნა</button>
                    <button class="btn btn-secondary" onclick="closeModal('reservationModal')">გაუქმება</button>
                </div>
            `;
            updateAvailableRoomsForNew();
            document.getElementById('reservationModal').classList.add('active');
        }
        function updateAvailableRoomsForNew() {
            const checkin = document.getElementById('newCheckinDate').value;
            const checkout = document.getElementById('newCheckoutDate').value;
            if (!checkin || !checkout || checkout <= checkin) {
                document.getElementById('newRoomId').innerHTML = '<option value="">აირჩიეთ სწორი თარიღები</option>';
                document.getElementById('newRoomInfo').innerHTML = '';
                return;
            }
            const availableRoomIds = getAvailableRooms(checkin, checkout);
            const rooms = Storage.get('rooms', []);
            let options = '<option value="">აირჩიეთ ოთახი...</option>';
            availableRoomIds.forEach(roomId => {
                const room = rooms.find(r => r.id === roomId);
                if (room) {
                    options += `<option value="${room.id}">${room.roomNumber} (${room.roomType}) - ${room.basePrice}₾</option>`;
                }
            });
            document.getElementById('newRoomId').innerHTML = options;
            // Update info on room select
            document.getElementById('newRoomId').onchange = function() {
                const selectedRoomId = parseInt(this.value);
                if (selectedRoomId) {
                    const room = rooms.find(r => r.id === selectedRoomId);
                    const nights = calculateNights(checkin, checkout);
                    const total = nights * room.basePrice;
                    document.getElementById('newRoomInfo').innerHTML = `
                        <div class="alert alert-info">
                            ღამეები: ${nights} | სულ: ${total}₾
                        </div>
                    `;
                } else {
                    document.getElementById('newRoomInfo').innerHTML = '';
                }
            };
        }
        function createReservation() {
            const guestName = document.getElementById('newGuestName').value.trim();
            const guestPhone = document.getElementById('newGuestPhone').value.trim();
            const guestEmail = document.getElementById('newGuestEmail').value.trim();
            const numGuests = parseInt(document.getElementById('newNumGuests').value);
            const checkinDate = document.getElementById('newCheckinDate').value;
            const checkoutDate = document.getElementById('newCheckoutDate').value;
            const roomId = parseInt(document.getElementById('newRoomId').value);
            const notes = document.getElementById('newNotes').value.trim();
            const lateCheckoutHours = parseInt(document.getElementById('newLateCheckoutHours').value);
            if (!guestName) {
                showAlert('newResAlert', 'სახელი აუცილებელია!', 'error');
                return;
            }
            if (checkoutDate <= checkinDate) {
                showAlert('newResAlert', 'Check-out უნდა იყოს Check-in-ის შემდეგ!', 'error');
                return;
            }
            if (!roomId) {
                showAlert('newResAlert', 'აირჩიეთ ოთახი!', 'error');
                return;
            }
            const rooms = Storage.get('rooms', []);
            const room = rooms.find(r => r.id === roomId);
            const reservations = Storage.get('reservations', []);
            const nextId = Storage.get('nextReservationId', 1);
            reservations.push({
                id: nextId,
                guestName,
                guestPhone,
                guestEmail,
                roomId,
                checkinDate,
                checkoutDate,
                numGuests,
                notes,
                status: 'Reserved',
                pricePerNight: room.basePrice,
                lateCheckoutHours,
                createdAt: new Date().toISOString()
            });
            Storage.set('reservations', reservations);
            Storage.set('nextReservationId', nextId + 1);
            closeModal('reservationModal');
            showPage('reservations');
        }
        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
        }
        // ================== ROOMS ==================
        function renderRooms() {
            const rooms = Storage.get('rooms', []);
            let html = `
                <div class="card">
                    <h2>ოთახები (${rooms.length} ცალი)</h2>
                   
                    <div class="form-row mb-20">
                        <div class="form-group">
                            <label>სტატუსი</label>
                            <select id="roomStatusFilter" onchange="renderRooms()">
                                <option value="">ყველა</option>
                                <option value="Active">Active</option>
                                <option value="Out of service">Out of service</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>ტიპი</label>
                            <select id="roomTypeFilter" onchange="renderRooms()">
                                <option value="">ყველა</option>
                                <option value="Single">Single</option>
                                <option value="Double">Double</option>
                                <option value="Triple">Triple</option>
                                <option value="Family">Family</option>
                            </select>
                        </div>
                    </div>
            `;
            // Filter
            const statusFilter = document.getElementById('roomStatusFilter') ? document.getElementById('roomStatusFilter').value : '';
            const typeFilter = document.getElementById('roomTypeFilter') ? document.getElementById('roomTypeFilter').value : '';
            let filtered = rooms;
            if (statusFilter) filtered = filtered.filter(r => r.status === statusFilter);
            if (typeFilter) filtered = filtered.filter(r => r.roomType === typeFilter);
            filtered.forEach(room => {
                html += `
                    <div class="accordion-item">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <span>ოთახი ${room.roomNumber} - ${room.roomType} - ${room.basePrice}₾</span>
                            <span>▼</span>
                        </div>
                        <div class="accordion-content">
                            <div id="roomAlert${room.id}"></div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label>ტიპი</label>
                                    <select id="roomType${room.id}">
                                        <option value="Single" ${room.roomType === 'Single' ? 'selected' : ''}>Single</option>
                                        <option value="Double" ${room.roomType === 'Double' ? 'selected' : ''}>Double</option>
                                        <option value="Triple" ${room.roomType === 'Triple' ? 'selected' : ''}>Triple</option>
                                        <option value="Family" ${room.roomType === 'Family' ? 'selected' : ''}>Family</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>ფასი (₾)</label>
                                    <input type="number" id="basePrice${room.id}" value="${room.basePrice}" min="0" step="10">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label>სტატუსი</label>
                                    <select id="roomStatus${room.id}">
                                        <option value="Active" ${room.status === 'Active' ? 'selected' : ''}>Active</option>
                                        <option value="Out of service" ${room.status === 'Out of service' ? 'selected' : ''}>Out of service</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>დასუფთავება</label>
                                    <select id="cleaningStatus${room.id}">
                                        <option value="Clean" ${room.cleaningStatus === 'Clean' ? 'selected' : ''}>Clean</option>
                                        <option value="Dirty" ${room.cleaningStatus === 'Dirty' ? 'selected' : ''}>Dirty</option>
                                        <option value="In progress" ${room.cleaningStatus === 'In progress' ? 'selected' : ''}>In progress</option>
                                    </select>
                                </div>
                            </div>
                            <button class="btn btn-primary" onclick="updateRoom(${room.id})">შენახვა</button>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            document.getElementById('roomsPage').innerHTML = html;
        }
        function updateRoom(roomId) {
            const rooms = Storage.get('rooms', []);
            const index = rooms.findIndex(r => r.id === roomId);
            if (index !== -1) {
                rooms[index].roomType = document.getElementById(`roomType${roomId}`).value;
                rooms[index].basePrice = parseFloat(document.getElementById(`basePrice${roomId}`).value);
                rooms[index].status = document.getElementById(`roomStatus${roomId}`).value;
                rooms[index].cleaningStatus = document.getElementById(`cleaningStatus${roomId}`).value;
                Storage.set('rooms', rooms);
                showAlert(`roomAlert${roomId}`, 'შენახულია!', 'success');
            }
        }
        // ================== REPORTS ==================
        function renderReports() {
            const today = new Date();
            const currentMonth = today.getMonth();
            const currentYear = today.getFullYear();
            let html = `
                <div class="card">
                    <h2>ანგარიშები</h2>
                   
                    <div class="form-row mb-20">
                        <div class="form-group">
                            <label>თვე</label>
                            <select id="reportMonth" onchange="updateReports()">
                                ${['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი',
                                   'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი']
                                   .map((m, i) => `<option value="${i}" ${i === currentMonth ? 'selected' : ''}>${m}</option>`).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label>წელი</label>
                            <select id="reportYear" onchange="updateReports()">
                                ${Array.from({length: 11}, (_, i) => currentYear - 5 + i)
                                   .map(y => `<option value="${y}" ${y === currentYear ? 'selected' : ''}>${y}</option>`).join('')}
                            </select>
                        </div>
                    </div>
                    <div id="reportStats"></div>
                    <h3 class="mt-20">ექსპორტი CSV</h3>
                    <div class="btn-group">
                        <button class="btn btn-primary" onclick="exportReservationsCSV()">ჯავშნების ექსპორტი</button>
                        <button class="btn btn-primary" onclick="exportPaymentsCSV()">გადახდების ექსპორტი</button>
                    </div>
                </div>
            `;
            document.getElementById('reportsPage').innerHTML = html;
            updateReports();
        }
        function updateReports() {
            const month = parseInt(document.getElementById('reportMonth').value);
            const year = parseInt(document.getElementById('reportYear').value);
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const firstDay = formatDate(new Date(year, month, 1));
            const lastDay = formatDate(new Date(year, month, daysInMonth));
            const reservations = Storage.get('reservations', []);
            const payments = Storage.get('payments', []);
            // Calculate occupancy
            let occupiedNights = 0;
            reservations.forEach(res => {
                if (res.status === 'Cancelled') return;
                const resCheckin = new Date(res.checkinDate);
                const resCheckout = new Date(res.checkoutDate);
                for (let day = 1; day <= daysInMonth; day++) {
                    const currentDate = new Date(year, month, day);
                    if (currentDate >= resCheckin && currentDate < resCheckout) {
                        occupiedNights++;
                    }
                }
            });
            const totalCapacity = 12 * daysInMonth;
            const occupancyRate = totalCapacity > 0 ? (occupiedNights / totalCapacity * 100).toFixed(1) : 0;
            // Revenue
            const totalRevenue = payments
                .filter(p => {
                    const pDate = new Date(p.paymentDate);
                    return pDate >= new Date(firstDay) && pDate <= new Date(lastDay);
                })
                .reduce((sum, p) => sum + p.amount, 0);
            // Arrivals/Departures
            const arrivals = reservations.filter(r => {
                const d = new Date(r.checkinDate);
                return d >= new Date(firstDay) && d <= new Date(lastDay) && r.status !== 'Cancelled';
            }).length;
            const departures = reservations.filter(r => {
                const d = new Date(r.checkoutDate);
                return d >= new Date(firstDay) && d <= new Date(lastDay) && r.status === 'Checked-out';
            }).length;
            document.getElementById('reportStats').innerHTML = `
                <h3>თვიური სტატისტიკა</h3>
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="label">დაკავებულობა</div>
                        <div class="value">${occupancyRate}%</div>
                    </div>
                    <div class="stat-card">
                        <div class="label">შემოსავალი</div>
                        <div class="value">${totalRevenue.toFixed(2)}₾</div>
                    </div>
                    <div class="stat-card">
                        <div class="label">ჩასახლებები</div>
                        <div class="value">${arrivals}</div>
                    </div>
                    <div class="stat-card">
                        <div class="label">გასახლებები</div>
                        <div class="value">${departures}</div>
                    </div>
                </div>
            `;
        }
        function exportReservationsCSV() {
            const month = parseInt(document.getElementById('reportMonth').value);
            const year = parseInt(document.getElementById('reportYear').value);
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const firstDay = formatDate(new Date(year, month, 1));
            const lastDay = formatDate(new Date(year, month, daysInMonth));
            const reservations = Storage.get('reservations', []);
            const rooms = Storage.get('rooms', []);
            const filtered = reservations.filter(r => {
                const d = new Date(r.checkinDate);
                return d >= new Date(firstDay) && d <= new Date(lastDay);
            });
            let csv = 'ID,სტუმარი,ტელეფონი,ელფოსტა,ოთახი,ტიპი,Check-in,Check-out,სტუმრები,სტატუსი,ფასი,შენიშვნა,ლეით ჩექაუთ საათები\n';
            filtered.forEach(r => {
                const room = rooms.find(rm => rm.id === r.roomId);
                csv += `${r.id},"${r.guestName}","${r.guestPhone || ''}","${r.guestEmail || ''}","${room?.roomNumber || ''}","${room?.roomType || ''}","${r.checkinDate}","${r.checkoutDate}",${r.numGuests},"${r.status}",${r.pricePerNight},"${r.notes || ''}",${r.lateCheckoutHours || 0}\n`;
            });
            downloadCSV(csv, `reservations_${year}_${month + 1}.csv`);
        }
        function exportPaymentsCSV() {
            const month = parseInt(document.getElementById('reportMonth').value);
            const year = parseInt(document.getElementById('reportYear').value);
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const firstDay = formatDate(new Date(year, month, 1));
            const lastDay = formatDate(new Date(year, month, daysInMonth));
            const payments = Storage.get('payments', []);
            const reservations = Storage.get('reservations', []);
            const rooms = Storage.get('rooms', []);
            const filtered = payments.filter(p => {
                const d = new Date(p.paymentDate);
                return d >= new Date(firstDay) && d <= new Date(lastDay);
            });
            let csv = 'ID,სტუმარი,ოთახი,თანხა,მეთოდი,თარიღი,შენიშვნა\n';
            filtered.forEach(p => {
                const res = reservations.find(r => r.id === p.reservationId);
                const room = res ? rooms.find(rm => rm.id === res.roomId) : null;
                csv += `${p.id},"${res?.guestName || ''}","${room?.roomNumber || ''}",${p.amount},"${p.paymentMethod}","${p.paymentDate}","${p.notes || ''}"\n`;
            });
            downloadCSV(csv, `payments_${year}_${month + 1}.csv`);
        }
        function downloadCSV(csvContent, filename) {
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        // ================== SETTINGS ==================
        function renderSettings() {
            const currentUser = Storage.get('currentUser');
            const rooms = Storage.get('rooms', []);
            const reservations = Storage.get('reservations', []);
            const payments = Storage.get('payments', []);
            const html = `
                <div class="card">
                    <h2>პარამეტრები</h2>
                   
                    <h3>პაროლის შეცვლა</h3>
                    <div id="settingsAlert"></div>
                    <div class="form-group">
                        <label>მიმდინარე პაროლი</label>
                        <input type="password" id="currentPassword">
                    </div>
                    <div class="form-group">
                        <label>ახალი პაროლი</label>
                        <input type="password" id="newPassword">
                    </div>
                    <div class="form-group">
                        <label>გაიმეორეთ ახალი პაროლი</label>
                        <input type="password" id="confirmPassword">
                    </div>
                    <button class="btn btn-primary" onclick="changePassword()">პაროლის შეცვლა</button>
                    <hr style="margin: 30px 0;">
                    <h3>სისტემის ინფორმაცია</h3>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="label">ოთახები</div>
                            <div class="value">${rooms.length}</div>
                        </div>
                        <div class="stat-card">
                            <div class="label">ჯავშნები</div>
                            <div class="value">${reservations.length}</div>
                        </div>
                        <div class="stat-card">
                            <div class="label">გადახდები</div>
                            <div class="value">${payments.length}</div>
                        </div>
                    </div>
                </div>
            `;
            document.getElementById('settingsPage').innerHTML = html;
        }
        function changePassword() {
            const currentPassword = document.getElementById('currentPassword').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const currentUser = Storage.get('currentUser');
            const users = Storage.get('users', []);
            const user = users.find(u => u.username === currentUser);
            if (!user || user.password !== currentPassword) {
                showAlert('settingsAlert', 'არასწორი მიმდინარე პაროლი!', 'error');
                return;
            }
            if (newPassword.length < 6) {
                showAlert('settingsAlert', 'პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო!', 'error');
                return;
            }
            if (newPassword !== confirmPassword) {
                showAlert('settingsAlert', 'პაროლები არ ემთხვევა!', 'error');
                return;
            }
            user.password = newPassword;
            Storage.set('users', users);
            showAlert('settingsAlert', 'პაროლი წარმატებით შეიცვალა!', 'success');
            document.getElementById('currentPassword').value = '';
            document.getElementById('newPassword').value = '';
            document.getElementById('confirmPassword').value = '';
        }
        // ================== INITIALIZATION ==================
        window.onload = function() {
            initializeApp();
           
            // Check if user is logged in
            const currentUser = Storage.get('currentUser');
            if (currentUser) {
                document.getElementById('loginContainer').classList.add('hidden');
                document.getElementById('appContainer').classList.remove('hidden');
                document.getElementById('currentUser').textContent = `მომხმარებელი: ${currentUser}`;
                showPage('dashboard');
            }
        };
    </script>
</body>
</html>
