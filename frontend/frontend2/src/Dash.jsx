import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import './Dash.css';
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
                    <h1 className="banner-title">EcoGuard Financial Dashboard</h1>
                </div>
                <button onClick={handleLogout} className="logout-btn">Log Out</button>
            </nav>
            
            <main className="dashboard-content">
                {/* Energy Dashboard Button */}
                <Link to="/energy-dashboard" className="energy-dashboard-btn">Go to Energy Dashboard</Link>

                {/* Other dashboard content can go here */}
            </main>
        </div>
    );
};

export default Dashboard;