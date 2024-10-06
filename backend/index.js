require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require('fs');  // Add this for file handling
const path = require('path'); // Add this for working with file paths

const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
});
const plaidClient = new PlaidApi(configuration);
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Existing /create_link_token route
app.post('/create_link_token', async function (request, response) {
  const plaidRequest = {
    user: {
      client_user_id: 'user',
    },
    client_name: 'Plaid Test App',
    products: ['auth', 'transactions'],
    language: 'en',
    redirect_uri: 'http://localhost:5173/',
    country_codes: ['US'],
  };
  try {
    const createTokenResponse = await plaidClient.linkTokenCreate(plaidRequest);
    response.json(createTokenResponse.data);
  } catch (error) {
    response.status(500).send('failure');
  }
});

// New route: Exchange the public token for an access token
app.post('/exchange_public_token', async function (request, response) {
  const publicToken = request.body.public_token;
  try {
    const tokenResponse = await plaidClient.itemPublicTokenExchange({
      public_token: publicToken,
    });
    const accessToken = tokenResponse.data.access_token;
    response.json({ access_token: accessToken });
  } catch (error) {
    console.error('Error exchanging public token:', error);
    response.status(500).send('Failed to exchange public token');
  }
});

// New route: Fetch transactions using the access token
app.post('/fetch_transactions', async function (request, response) {
  const accessToken = request.body.access_token;
  const startDate = '2024-01-01'; // Adjust the date as per your needs
  const endDate = '2024-12-31';

  try {
    const transactionsResponse = await plaidClient.transactionsGet({
      access_token: accessToken,
      start_date: startDate,
      end_date: endDate,
      options: {
        count: 100, // Adjust this count if necessary
        offset: 0,
      },
    });

    const transactions = transactionsResponse.data.transactions;

    // Save transactions to a .json file
    const transactionsPath = path.join(__dirname, 'transactions.json');
    fs.writeFileSync(transactionsPath, JSON.stringify(transactions, null, 2), 'utf-8');

    response.json({ message: 'Transactions saved to transactions.json' });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    response.status(500).send('Failed to fetch transactions');
  }
});

// Example hello endpoint
app.post('/hello', (request, response) => {
  response.json({ message: 'hello ' + request.body.name });
});

app.listen(8000, () => {
  console.log('server has started');
});
