import { useEffect, createContext, useState, useContext, useCallback } from 'react'
import api from '../services/api'

const NewsContex = createContext()

const NewsProvider = ({ children }) => {
    const [ news , setNews ] = useState([])
    const [ allNews, setAllNews ] = useState([])
    const [ searchValue, setSearchValue ] = useState('')

    const filteredNews = !!searchValue ? allNews.filter(news => {
        return news.title.toLowerCase().includes(searchValue.toLowerCase()) || news.short_description.toLowerCase().includes(searchValue.toLowerCase())
    }) : news
        
    const getAllNews = async () => {
        const res = await api.get('latestnews')
        return res.data
    }    
    
    const handleLoadNews = useCallback(async () => {
        const newsData = await getAllNews()
        setNews([...newsData])
        setAllNews(newsData)
    }, [])

    useEffect(()=>{
        handleLoadNews()
    }, [handleLoadNews])

    const heandleSearchNews = (e) => {
        const { value } = e.target
        setSearchValue(c => value)
    }
    const clearSerchValueNews = ()=>{
        setSearchValue('')
    }    
    const data = { 
        newsData: filteredNews,
        searchValue,
        heandleSearchNews,
        clearSerchValueNews
     }
    
    return (
        <NewsContex.Provider value={data}>
            {children}
        </NewsContex.Provider>
    )
}

const useNews = () => {
    const context = useContext(NewsContex)
    if (context === undefined) {
        throw new Error("Contexto das notícias não disponivel.")
    }
    return context
}
export { NewsProvider, useNews }