import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="background1">
            <h1>Home Page</h1>
            <p>Welcome to the home page.</p>
            <Link to="/signin">
                <button>Go to Sign in</button>
            </Link>
        </div>
    );
};

export default Home;
