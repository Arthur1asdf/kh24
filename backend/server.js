// server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const plaidRoutes = require('./routes/plaid');
const cors = require('cors');

const app = express();

// Connect to MongoDB Atlas
connectDB();

// Middleware
app.use(cors()); // Allow CORS for frontend-backend communication
app.use(express.json()); // Parse JSON requests

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/plaid', plaidRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
