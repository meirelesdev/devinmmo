import axios from "axios";
const api = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        'Countent-Type':'application/json',
        'x-rapidapi-host':process.env.REACT_APP_RAPIDAPI_HOST,
        'x-rapidapi-key':  process.env.REACT_APP_RAPIDAPI_KEY,
    }
})

export default api