import axios from "axios";
import { useEffect, useState } from "react";
axios.defaults.baseURL = "http://localhost:8000"; // Ensure this matches the Express server's port
import { usePlaidLink } from "react-plaid-link";
import './Plad.css';

const Plad = () => {
    const [linkToken, setLinkToken] = useState();
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
        onSuccess: (public_token, metadata) => {
            console.log("success", public_token, metadata)
            // send public_token to server
        },
    });

    return (
        <button className="bankButton" onClick={() => open()} disabled={!ready}>
            Connect a bank account
        </button>
    );

};

export default Plad;
