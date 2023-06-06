import axios from "axios";

const api = axios.create(
    {
        baseURL: 'http://10.220.221.14:8080',
        headers: {
            "Content-Type": "application/json"
        }
    }
)

export default api;