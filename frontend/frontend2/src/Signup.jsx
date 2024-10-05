import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="signup-container">
            <div className="left-half">
                <h2>Fraud Detection Analytics</h2>
                <p>Advanced analytics to monitor your transactions.</p>
                {/* Add imagery here */}
                <h2>Energy Consumption Metrics</h2>
                <p>Track and optimize your energy usage.</p>
                {/* Add imagery here */}
            </div>
            <div className="right-half">
                <form className="signup-form">
                    <h2>Create an Account</h2>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-input">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                id="password" 
                                name="password" 
                                required 
                            />
                            <button 
                                type="button" 
                                onClick={() => setShowPassword(!showPassword)}
                                className="show-password"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="signup-button">Sign Up</button>
                    <p className="login-link" style={{ fontSize: 
                        '0.9rem', color: '#666' }}>
                            Already have an account? <Link to="/login">Log in</Link>
                    </p>
                    <p className="terms">
                        By creating an account, you accept OurName's Terms of Service & Privacy Statement
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;