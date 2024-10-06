import axios from "axios"
import { useEffect, useState } from "react"
axios.defaults.baseURL = "https://localhost:8000"


const Plaid = () => {
    useEffect(() => {
        async function fetch() {
            const response = axios.post("/hello", { name: "vlad" });
            console.log("response", response.data);
        }
        fetch()
    }, []);
    return (
        <span>Hello World!</span>
    )

}
export default Plaid;  