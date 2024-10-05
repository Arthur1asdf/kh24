import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="header">
                <nav className="navbar">
                    <Link to="/" className="logo">OurLogo</Link>
                    <div className="nav-links">
                        <Link to="#" className="nav-link">Learn</Link>
                        <Link to="#" className="nav-link">About</Link>
                        <Link to="#" className="nav-link">Contact</Link>
                    </div>
                    <div className="auth-buttons">
                        <Link to="/signin" className="btn btn-login">Login</Link>
                        <Link to="/signup" className="btn btn-signup">Sign Up</Link>
                    </div>
                </nav>
            </header>

            <main className="main-content">
                <h1>Welcome to Our Platform</h1>
                <p>Discover amazing features and start your journey with us today.</p>
                <Link to="/learn" className="btn btn-primary">Get Started</Link>
            </main>
        </div>
    );
};

export default Home;