import { useEffect, createContext, useState, useContext, useCallback } from 'react'
import api from '../services/api'

const NewsContex = createContext()

const NewsProvider = ({ children }) => {
    const [ news , setNews ] = useState([])
    const [ allNews, setAllNews ] = useState([])
    const [ page, setPage ] = useState(0)    
    const [ searchValue, setSearchValue ] = useState('')
    
    const newsPerPage = 10
   
    const filteredNews = !!searchValue ? allNews.filter(news => {
        return news.title.toLowerCase().includes(searchValue.toLowerCase()) || news.short_description.toLowerCase().includes(searchValue.toLowerCase())
    }) : news
        
    const getAllNews = async () => {
        const res = await api.get('latestnews')
        return res.data
    }
    
    
    const handleLoadNews = useCallback(async (page, newsPerPage) => {
        const newsData = await getAllNews()
        setNews(newsData.slice(page, newsPerPage))
        setAllNews(newsData)
    }, [])

    useEffect(()=>{
        handleLoadNews(0, newsPerPage)
    }, [handleLoadNews, newsPerPage])

    const heandleSearchNews = (e) => {
        const { value } = e.target
        setSearchValue(c => value)
    }
    const clearSerchValueNews = ()=>{
        setSearchValue('')
        console.log("limpando busca noticias")
    }
    
    const loadMoreNews = () => {
        const nextPage = page + newsPerPage
        const nextNews = allNews.slice(nextPage, nextPage + newsPerPage)
        news.push(...nextNews)
        setNews(news)
        setPage(nextPage)
    }

    const data = { 
        newsData: filteredNews,
        searchValue,
        heandleSearchNews,
        loadMoreNews,
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