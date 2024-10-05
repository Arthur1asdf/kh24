// routes/plaid.js
const express = require('express');
const plaid = require('plaid');
const router = express.Router();

const plaidClient = new plaid.Client({
  clientID: process.env.PLAID_CLIENT_ID,
  secret: process.env.PLAID_SECRET,
  env: plaid.environments.sandbox, // or development/production
});

router.post('/get_access_token', async (req, res) => {
  const publicToken = req.body.public_token;
  
  try {
    const response = await plaidClient.exchangePublicToken(publicToken);
    const accessToken = response.access_token;
    res.json({ accessToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Could not exchange token' });
  }
});

router.get('/transactions', async (req, res) => {
  const accessToken = req.query.access_token;
  
  try {
    const transactions = await plaidClient.getTransactions(accessToken, '2023-10-01', '2023-10-05');
    res.json(transactions.transactions);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Could not fetch transactions' });
  }
});

module.exports = router;
