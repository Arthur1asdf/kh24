import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logoImage from './assets/kh24_logo.png'; // Import your logo image

const Home = () => {
    const [name, setName] = useState("");

    useEffect(() => {
        const fetchName = async () => {
            try {
                const response = await fetch("http://localhost:5000/hello");
                const json = await response.json();
                setName(json.name);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchName();
    }, []);

    return (
        <div className="home-container">
            <header className="header">
                <nav className="navbar">
                    <Link to="/" className="logo">
                        <img src={logoImage} alt="OurLogo" className="logo-image" />
                    </Link>
                    <div className="nav-links">
                        <Link to="/learn" className="nav-link">Learn</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/plad" className="nav-link">Contact</Link>
                    </div>
                    <div className="auth-buttons">
                        <Link to="/signin" className="btn btn-login">Login</Link>
                        <Link to="/signup" className="btn btn-signup">Sign Up</Link>
                    </div>
                </nav>
            </header>

            <main className="main-content">
                <h1>Welcome to EcoGuard</h1>
                <p>Revolutionizing home energy efficiency and financial security.</p>
                {name && <p>Hello, {name}! Ready to optimize your energy and secure your finances?</p>}
                <Link to="/dashboard" className="sample-dashboard-btn">View Sample Dashboard</Link>
                <section className="solution-section">
                    <h2>Our Innovative Solution</h2>
                    <div className="solution-grid">
                        <div className="solution-item">
                            {/* Placeholder for image */}
                            <div className="solution-icon">🏠</div>
                            <h3 className="solution-title">Decarbonized Homes</h3>
                            <p className="solution-description">
                                AI-powered recommendations for optimizing your home's energy consumption and reducing carbon footprint.
                            </p>
                        </div>
                        <div className="solution-item">
                            {/* Placeholder for image */}
                            <div className="solution-icon">📊</div>
                            <h3 className="solution-title">Energy Efficiency</h3>
                            <p className="solution-description">
                                Real-time monitoring and analysis to drive significant improvements in household energy efficiency.
                            </p>
                        </div>
                        <div className="solution-item">
                            {/* Placeholder for image */}
                            <div className="solution-icon">🛡️</div>
                            <h3 className="solution-title">Fraud Detection</h3>
                            <p className="solution-description">
                                AI-powered financial fraud detection system analyzing real-time transactions to protect your assets.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Dashboard Grid */}
                <div className="dashboard-grid">
                    {/* Dashboard cards */}
                    <div className="dashboard-card energy-savings">
                        <h3>Energy Savings</h3>
                        <p className="big-number">15%</p>
                        <p>Reduction in energy consumption this month</p>
                    </div>
                    <div className="dashboard-card carbon-footprint">
                        <h3>Carbon Footprint</h3>
                        <p className="big-number">2.5 tons</p>
                        <p>Your estimated annual CO2 emissions</p>
                    </div>
                    <div className="dashboard-card fraud-protection">
                        <h3>Fraud Protection</h3>
                        <p className="big-number">100%</p>
                        <p>Of your transactions protected</p>
                    </div>
                    <div className="dashboard-card eco-score">
                        <h3>Eco-Finance Score</h3>
                        <p className="big-number">85/100</p>
                        <p>Great job! You're on track for sustainable finances</p>
                    </div>
                </div>

                {/* Centers Action Buttons */}
                <section className="action-center">
                    <h2>Take Action</h2>
                    <div className="action-buttons">
                        <button className="action-btn">Optimize Energy Use</button>
                        <button className="action-btn">Review Transactions</button>
                        <button className="action-btn">Set Eco-Goals</button>
                        <button className="action-btn">Financial Health Check</button>
                    </div>
                </section>

                {/* Insights Section */}
                <section className="insights-section">
                    <h2>Your Eco-Financial Insights</h2>
                    <ul>
                        {/* Example insights */}
                        <li>Your solar panels saved you $50 this month!</li>
                        <li>Tip: Upgrading to LED bulbs could reduce your energy bill by 10%</li>
                        <li>Alert: Unusual transaction detected. Click to review.</li>
                        <li>You're in the top 10% of eco-friendly users in your area!</li>
                    </ul>
                </section>

            </main> {/* Closing main tag */}
        </div> 
    );
};

export default Home; // Ensure you export the Home component correctly