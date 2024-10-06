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

                <section className="solution-section">
                    <h2>Our Innovative Solution</h2>
                    <div className="solution-grid">
                        <div className="solution-item">
                            {/* Placeholder for image */}
                            <div className="solution-icon">📊</div>
                            <h3 className="solution-title">Decarbonized Homes</h3>
                            <p className="solution-description">
                            Optimize your utility bills with AI insights to create an eco-friendly home and reduce your carbon footprint.                            </p>
                        </div>
                        <div className="solution-item">
                            {/* Placeholder for image */}
                            <div className="solution-icon">💡</div>
                            <h3 className="solution-title">Energy Efficiency</h3>
                            <p className="solution-description">
                            Maximize savings with real-time monitoring that enhances your household's energy performance and reduces waste.
                            </p>
                        </div>
                        <div className="solution-item">
                            {/* Placeholder for image */}
                            <div className="solution-icon">📍</div>
                            <h3 className="solution-title">Fraud Detection</h3>
                            <p className="solution-description">
                            Safeguard your finances with AI-driven fraud detection that securely analyzes transactions in real-time.                             </p>
                        </div>
                    </div>
                </section>

            </main> {/* Closing main tag */}
        </div> 
    );
};

export default Home; 