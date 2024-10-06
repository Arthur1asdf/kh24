import React, { useState } from 'react';
import './Signin.css'; // Assuming you have a CSS file for styling
import './App.css';
import videoBg from './assets/bg_geometric.mp4';
import { Link } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle sign-in stuff here
        console.log("Email", email, "Password: ", password);
    };

    return (
        <div>
            <div className='sign-in'>
                <video src={videoBg} autoPlay loop muted />
            </div>
            <div className="sign-in-container">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit} className="sign-in-form">
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>


                    <Link to="/plad"> <button type="submit" className="sign-in-button">Sign in</button> </Link>
                </form>
            </div>
        </div>
    );
};

export default Signin;