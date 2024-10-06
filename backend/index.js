require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');


// console.log("PLAID_CLIENT_ID:", process.env.PLAID_CLIENT_ID);
// console.log("PLAID_SECRET:", process.env.PLAID_SECRET);
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

app.post("/hello", (request, response) => {
  response.json({ message: "hello " + request.body.name });
});

app.post('/create_link_token', async function (request, response) {
  const plaidRequest = {
    user: {
      client_user_id: 'user',
    },
    client_name: 'Plaid Test App',
    products: ['auth'],
    language: 'en',
    redirect_uri: 'http://localhost:5173/', // Corrected from 'https://locathost'
    country_codes: ['US'],
  };
  try {
    const createTokenResponse = await plaidClient.linkTokenCreate(plaidRequest);
    response.json(createTokenResponse.data);
  } catch (error) {
    response.status(500).send("failure"); // Corrected typo
  }
});

app.listen(8000, () => {
  console.log("server has started");
});
