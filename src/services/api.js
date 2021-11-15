import axios from "axios";
const api = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        'Countent-Type':'application/json',
        'x-rapidapi-host':process.env.REACT_APP_RAPIDAPI_HOST,
        'x-rapidapi-key':  process.env.REACT_APP_RAPIDAPI_KEY,
    }
})

export const getData = async () => {
    const response = await Promise.all([
        await api.get('latestnews'),
        await api.get('games')
    ])
    return {
        news: response[0].data,
        games: response[1].data,
    }
}
export const getGame = async (id) => {    
    const response = await api.get('game', { params: { id } })
    return response.data
}

export default api