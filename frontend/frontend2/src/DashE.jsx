import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashE.css';
import logoImage from './assets/kh24_logo.png'; // Import your logo image

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