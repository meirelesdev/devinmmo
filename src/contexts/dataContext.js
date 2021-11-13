import { createContext, useState, useEffect, useContext, useCallback } from 'react'
import api from '../services/api'

const DataContex = createContext()

const DataProvider = ({ children }) => {
    const [ games , setGames ] = useState([])
    const [ allGames, setAllGames ] = useState([])
    const [ searchValueGames, setSearchValueGames ] = useState('')
    const [ news , setNews ] = useState([])
    const [ allNews, setAllNews ] = useState([])
    const [ searchValueNews, setSearchValueNews ] = useState('')
        
    const filteredGames = !!searchValueGames ? allGames.filter(game => {
        return game.title.toLowerCase().includes(searchValueGames.toLowerCase()) || game.short_description.toLowerCase().includes(searchValueGames.toLowerCase())
    }) : games

    const filteredNews = !!searchValueNews ? allNews.filter(news => {
        return news.title.toLowerCase().includes(searchValueNews.toLowerCase()) || news.short_description.toLowerCase().includes(searchValueNews.toLowerCase())
    }) : news
    
    const getAllNews = async () => {
        const res = await api.get('latestnews')
        return res.data
    }    

    const getAllGames = async () => {
        const res = await api.get('games')
        return res.data
    }

    const handleLoadNews = useCallback(async () => {
        const newsData = await getAllNews()
        setNews([...newsData])
        setAllNews(newsData)
    }, [])

    const handleLoadGames = useCallback(async () => {
        const gamesData = await getAllGames()
        setGames([...gamesData])
        setAllGames(gamesData)
    }, [])

    useEffect(()=>{
        handleLoadGames()
        handleLoadNews()
    }, [handleLoadGames, handleLoadNews])

    const heandleSearchGames = (e) => {
        const { value } = e.target
        setSearchValueGames(c => value)
    }

    const heandleSearchNews = (e) => {
        const { value } = e.target
        setSearchValueNews(c => value)
    }
    const clearSerchValueGames = ()=>{
        setSearchValueGames('')
    }
    const clearSerchValueNews = ()=>{
        setSearchValueNews('')
    }
    const data = { 
        allGames: filteredGames,
        newsData: filteredNews,
        searchValueGames,
        searchValueNews,
        heandleSearchGames,
        heandleSearchNews,
        clearSerchValueGames,
        clearSerchValueNews
     }
    return (
        <DataContex.Provider value={data}>
            {children}
        </DataContex.Provider>
    )
}
const useData = () => {
    const context = useContext(DataContex)
    if (context === undefined) {
        throw new Error("Este contexto não esta disponivel")
    }
    return context
}

export { DataProvider, useData }
