import React, { useState } from 'react';
import './Signin.css'; // Assuming you have a CSS file for styling
import './App.css';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle sign-in logic here
        console.log("Email", email, "Password: ", password);
    };

    return (
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
                <button type="submit" className="sign-in-button">Sign In</button>
            </form>
        </div>
    );
};

export default Signin;
