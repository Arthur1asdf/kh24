import axios from "axios";
import { useEffect, useState } from "react";
import { usePlaidLink } from "react-plaid-link";
import './Plad.css';
import { Link } from 'react-router-dom';


axios.defaults.baseURL = "http://localhost:8000"; // Ensure this matches the Express server's port

function PlaidAuth({ publicToken }) {
    return <span>{publicToken}</span>;
}

const Plad = () => {
    const [linkToken, setLinkToken] = useState();
    const [publicToken, setPublicToken] = useState();

    useEffect(() => {
        async function fetchToken() {
            try {
                const response = await axios.post("/create_link_token");
                setLinkToken(response.data.link_token);
            } catch (error) {
                console.error("Error fetching link token", error);
            }
        }
        fetchToken();
    }, []);

    const { open, ready } = usePlaidLink({
        token: linkToken,
        onSuccess: async (public_token, metadata) => {
            setPublicToken(public_token);
            console.log("success", public_token, metadata);

            try {
                // Exchange public_token for access_token
                const exchangeResponse = await axios.post('/exchange_public_token', { public_token });
                const accessToken = exchangeResponse.data.access_token;

                // Fetch transactions using the access_token
                const transactionsResponse = await axios.post('/fetch_transactions', { access_token: accessToken });
                console.log(transactionsResponse.data.message);
            } catch (error) {
                console.error("Error fetching transactions", error);
            }
        },
    });

    return publicToken ? (<PlaidAuth publicToken={publicToken} />) : (

        <div className="backgroundDiv">
            <div className="po">
                <button className="bankButton" onClick={() => open()} disabled={!ready}>
                    Connect a bank account
                </button>
            </div>
            <div className="po">
                <Link to="/dashboard"><button className="bankButton">
                    Continue
                </button></Link>
            </div>
            <div className="po">
                <Link to="/signin"><button className="bankButton">
                    Back
                </button></Link>
            </div>
        </div>
    );

};

export default Plad;
