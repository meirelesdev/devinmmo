import { createContext, useState, useContext, useCallback } from 'react'
import { useEffect } from 'react/cjs/react.development'
import api from '../services/api'

const GamesContex = createContext()

const GamesProvider = ({ children }) => {
    const [gamesData, setGamesData] = useState()
    const [pageGames, setPageGames] = useState(0)
    const [gamesPerPage, setGamesPerPage] = useState(4)    
    
    const handleLoadGames = useCallback(async(page, gamesPerPage)=>{
        setPageGames(page)
        setGamesPerPage(gamesPerPage)
        const games = await getAllGames()
        const filteredGames = games.slice(page, gamesPerPage)
        setGamesData(filteredGames)
    })
    
    const getAllGames = async () => {
        const res = await api.get('games')
        return res.data
    }
    
    useEffect(()=>{
        handleLoadGames(pageGames, gamesPerPage)
    }, [pageGames, gamesPerPage])

    const data = { 
        gamesData,
        handleLoadGames, 
        setPageGames,
        setGamesPerPage,
     }
    return (
        <GamesContex.Provider value={data}>
            {children}
        </GamesContex.Provider>
    )
}
const useGames = () => {
    const context = useContext(GamesContex)
    if (context === undefined) {
        throw new Error("Sem Contexto")
    }
    return context
}
export { GamesProvider, useGames }