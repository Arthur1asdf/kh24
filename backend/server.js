require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
const authRoutes = require('./routes/auth'); // Keep this if you have auth routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Plaid setup
const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox, // Use 'sandbox', 'development', or 'production' as needed
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
      'Plaid-Version': '2020-09-14', // Optional: specify the API version
    },
  },
});

const plaidClient = new PlaidApi(configuration);

// Plaid Link token route
app.post('/api/create_link_token', async (req, res) => {
  // ... your existing code ...
});

// Exchange public token for access token
app.post('/api/exchange_public_token', async (req, res) => {
  // ... your existing code ...
});

// Keep other routes
app.use('/api/auth', authRoutes); // Optional

// **Add a route for the root path**
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

// Simple route for testing
app.get('/hello', (req, res) => {
  res.send('Hello from the server!');
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
