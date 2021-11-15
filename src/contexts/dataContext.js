import { createContext, useState, useEffect, useContext, useCallback } from 'react'
import { getData } from '../services/api'

const DataContex = createContext()

const getSearchValues = (value, data) => {
    return data.filter(item => {
        return item.title.toLowerCase().includes(value.toLowerCase()) || item.short_description.toLowerCase().includes(value.toLowerCase())
    })
}
const initSearch = {
    searchGames: '',
    searchNews:''
}

const DataProvider = ({ children }) => {
    const [ allGames, setAllGames ] = useState([])
    
    const [ search, setSearch ] = useState(initSearch)
    const [ allNews, setAllNews ] = useState([])

    const filteredGames = !!search.searchGames ? getSearchValues(search.searchGames, allGames) : allGames
    const filteredNews = !!search.searchNews ? getSearchValues(search.searchNews, allNews) : allNews
    
    const handleLoadData = useCallback(async () => {
         const { news, games } = await getData()
        setAllGames([...games])
        setAllNews([...news])
    }, [])
    const clearSearch = () => {
        setSearch(initSearch)
    }

    useEffect(()=>{
        handleLoadData()
    }, [handleLoadData])

    const heandleSearch = (e) => {
        const { value, name } = e.target
        setSearch(c => ({...c, [name]: value}))
    }
    const data = { 
        allGames: filteredGames,
        allNews: filteredNews,
        searchGames: search.searchGames,
        searchNews: search.searchNews,
        heandleSearch,
        clearSearch
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
