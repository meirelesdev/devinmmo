import axios from "axios";
import { config } from '../configs/config'

const api = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: config
})

export default api