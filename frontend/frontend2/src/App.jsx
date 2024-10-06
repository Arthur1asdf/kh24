import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Signin from './Signin';
import Signup from './Signup';
import Plad from './Plad';
import Dashboard from './Dash'; // hi import Dashboard component?
import EnergyDashboard from './components/EnergyDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/plad" element={<Plad />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/energy-dashboard" element={<EnergyDashboard />} /> 
      </Routes>
    </Router>
  );
}

export default App;