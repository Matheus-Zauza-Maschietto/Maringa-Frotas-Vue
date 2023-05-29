import axios from "axios";

const api = axios.create(
    {
        baseURL: 'http://26.101.165.142:8080',
        headers: {
            "Content-Type": "application/json"
        }
    }
)

export default api;