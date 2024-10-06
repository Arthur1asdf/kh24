import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dash.css';
import logoImage from './assets/kh24_logo.png'; // Import logo from assets


const Dashboard = () => {
   const navigate = useNavigate();


   const handleLogout = () => {
       // Clear tokens
       localStorage.removeItem('authToken');       
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
               <section className="welcome-section">
                   <h2>Welcome back, [User Name]!</h2>
                   <p>Here's an overview of your eco-financial status:</p>
               </section>


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


               {/* Centered Action Buttons */}
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
                   <ul> {/* wrap  list items in a UL tag */}
                   {/* ughhh bold text is not working even in css file */}
                       <li>Your solar panels <span className="bold-text">saved</span> you $50 this month!</li>
                       <li><span className="bold-text">Tip:</span> Upgrading to LED bulbs could
                           <span className="bold-text"> reduce</span> your energy bill by
                           <span className="bold-text"> 10%</span></li>
                       <li><span className="bold-text">Alert:</span> Unusual transaction detected. Click to review.</li>
                       <li>You're in the
                           <span className="bold-text"> top 10%</span> of eco-friendly users in your area!</li>
                   </ul> {/* Closing UL tag */}
               </section>
           </main>
       </div>
   );
};


export default Dashboard;
