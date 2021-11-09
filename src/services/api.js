import axios from "axios";
import { config } from '../configs/config'

const api = axios.create({
    baseURl: 'https://mmo-games.p.rapidapi.com'
})
api.defaults.headers = config

export default api