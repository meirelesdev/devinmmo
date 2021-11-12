import { createContext, useState, useContext, useCallback } from 'react'
import { useEffect } from 'react/cjs/react.development'
import api from '../services/api'

const GamesContex = createContext()

const GamesProvider = ({ children }) => {
    const [ games , setGames ] = useState([])
    const [ allGames, setAllGames ] = useState([])
    const [ searchValue, setSearchValue ] = useState('')
        
    const filteredGames = !!searchValue ? allGames.filter(game => {
        return game.title.toLowerCase().includes(searchValue.toLowerCase()) || game.short_description.toLowerCase().includes(searchValue.toLowerCase()) || game.platform.toLowerCase().includes(searchValue.toLowerCase())
    }) : games
        
    const getAllGames = async () => {
        const res = await api.get('games')
        return res.data
    }
    
    const handleLoadGames = useCallback(async () => {
        const gamesData = await getAllGames()
        setGames([...gamesData])
        setAllGames(gamesData)
    }, [])

    useEffect(()=>{
        handleLoadGames()
    }, [handleLoadGames])

    const heandleSearchGames = (e) => {
        const { value } = e.target
        setSearchValue(c => value)
    }
    const clearSerchValueGames = ()=>{
        setSearchValue('')
    }
    const data = { 
        allGames: filteredGames,
        searchValue,
        heandleSearchGames,
        clearSerchValueGames
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
        throw new Error("Contexto dos Jogos não disponivel")
    }
    return context
}
export { GamesProvider, useGames }