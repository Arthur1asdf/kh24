import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import './Dash.css';
import logoImage from './assets/kh24_logo.png'; // Import your logo image

const transactions = [
    { id: 1, description: 'Orlando Utilities', amount: '-$120.45' },
    { id: 2, description: 'Luxury Goods Retailer', amount: '-$7800.00' },
    { id: 3, description: 'Halal Guys', amount: '-$15.67' },
    { id: 4, description: 'Amazon Purchase', amount: '-$50.35' },
];

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken'); // Clear user authentication data
        navigate('/'); // Go to home page after logout
    };

    return (
        <div className="dashboard-container">
            <nav className="dashboard-nav">
                <div className="logo-container">
                    <img src={logoImage} alt="EcoGuard Logo" className="logo-image" />
                    <h1 className="banner-title">EcoGuard Financial Dashboard</h1>
                </div>
                <button onClick={handleLogout} className="logout-btn">Log Out</button>
            </nav>
            
            <main className="dashboard-content">
                {/* Energy Dashboard Button */}
                <Link to="/energy-dashboard" className="energy-dashboard-btn">View Energy Dashboard</Link>

                {/* Transaction List */}
                <section className="transaction-list">
                    <h2>Recent Transactions</h2>
                    <ul>
                        {transactions.map(transaction => (
                            <li key={transaction.id} className="transaction-item">
                                <span className="transaction-description">{transaction.description}</span>
                                <span className="transaction-amount">{transaction.amount}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Other dashboard content can go here */}
            </main>
        </div>
    );
};

export default Dashboard;