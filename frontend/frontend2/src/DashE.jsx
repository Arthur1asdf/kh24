import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashE.css';
import logoImage from './assets/kh24_logo.png'; // Import your logo image

const months = [
    { id: 1, description: 'Orlando Utilities Payment', amount: '-$120.45'},
    { id: 2, description: 'ChargePoint - EV Charging Session', amount: '-$179.92'},
    { id: 3, description: 'Energy Efficieny Upgrade (LED Bulbs)', amount: '-$41.99'},
    { id: 4, description: 'Water Usage Adjustment Credit', amount: '$10.35'},
]

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user authentication data (if applicable)
        localStorage.removeItem('authToken'); // Example: remove token from local storage
        navigate('/'); // Go to home page after logout
    };

    return (
        <div className="dashboard-container">
            <nav className="dashboard-nav">
                <div className="logo-container">
                    <img src={logoImage} alt="EcoGuard Logo" className="logo-image" />
                    <h1 className="banner-title">EcoGuard Energy Analytics Dashboard</h1>
                </div>
                <button onClick={handleLogout} className="logout-btn">Log Out</button>
            </nav>
    
        </div>
    );
};

export default Dashboard;