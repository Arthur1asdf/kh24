// // routes/plaid.js
// const express = require('express');
// const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
// const router = express.Router();

// // Plaid client setup
// const configuration = new Configuration({
//   basePath: PlaidEnvironments.sandbox, // Use 'sandbox', 'development', or 'production' as needed
//   baseOptions: {
//     headers: {
//       'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
//       'PLAID-SECRET': process.env.PLAID_SECRET,
//       'Plaid-Version': '2020-09-14', // Specify the API version you're using
//     },
//   },
// });

// const plaidClient = new PlaidApi(configuration);

// // Exchange public token for access token
// router.post('/get_access_token', async (req, res) => {
//   const publicToken = req.body.public_token;

//   try {
//     const response = await plaidClient.itemPublicTokenExchange({
//       public_token: publicToken,
//     });
//     const accessToken = response.data.access_token;
//     res.json({ accessToken });
//   } catch (err) {
//     console.error(err.response ? err.response.data : err.message);
//     res.status(500).json({ error: 'Could not exchange token' });
//   }
// });

// // Fetch transactions
// router.get('/transactions', async (req, res) => {
//   const accessToken = req.query.access_token;

//   try {
//     const response = await plaidClient.transactionsGet({
//       access_token: accessToken,
//       start_date: '2023-10-01',
//       end_date: '2023-10-05',
//     });
//     res.json(response.data.transactions);
//   } catch (err) {
//     console.error(err.response ? err.response.data : err.message);
//     res.status(500).json({ error: 'Could not fetch transactions' });
//   }
// });

// module.exports = router;
