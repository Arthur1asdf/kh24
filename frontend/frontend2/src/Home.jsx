import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logoImage from '/Users/Christo/Documents/GitHub/KnightHacks-2024/kh24/frontend/frontend2/src/assets/kh24_logo.png';

const Home = () => {
    const [name, setName] = useState(""); // State to hold the name from the API

    // Fetch data from the API when the component mounts
    useEffect(() => {
        const fetchName = async () => {
            try {
                const response = await fetch("http://localhost:5000/hello");
                const json = await response.json();
                setName(json.name); // Set the name received from the API
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchName(); // Call the fetch function
    }, []); // Empty dependency array to run once on mount

    return (
        <div className="home-container">
            <header className="header">
                <nav className="navbar">
                    <Link to="/" className="logo"><img src={logoImage}
                    alt="OurLogo" className="logo-image" />
                    </Link>
                    <div className="nav-links">
                        <Link to="/learn" className="nav-link">Learn</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
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
                {name && <p>My name is {name}</p>} {/* Only show if name is present */}
            </main>
        </div>
    );
};

export default Home;