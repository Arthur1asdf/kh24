require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const plaidRoutes = require('./routes/plaid');

const app = express();

// Middleware
app.use(cors()); // Allow CORS for frontend-backend communication
app.use(express.json()); // Parse JSON requests

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/plaid', plaidRoutes);

// Simple /hello route
app.get('/hello', (req, res) => {
    const response = {
        name: "simho",
        age: 25
    };
    res.send(JSON.stringify(response));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
