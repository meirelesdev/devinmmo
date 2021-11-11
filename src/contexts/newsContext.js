import {useEffect, createContext, useState, useContext, useCallback } from 'react'
import api from '../services/api'

const NewsContex = createContext()

const NewsProvider = ({ children }) => {    
    const [newsData, setNewsData] = useState()
    const [pageNews, setNewsPage] = useState(0)
    const [newsPerPage, setNewsPerPage] = useState(4)

    const handleLoadNews = useCallback(async(page, newsPerPage)=>{
        setNewsPage(page)
        setNewsPerPage(newsPerPage)
        const news = await getAllNews()
        const filteredNews = news.slice(page, newsPerPage)
        setNewsData(filteredNews)
    })
    const getAllNews = async () => {
        const res = await api.get('latestnews')
        return res.data
    }

    useEffect(()=>{
        handleLoadNews(pageNews, newsPerPage)
    }, [pageNews, newsPerPage])

    const data = { 
        newsData,
        pageNews,
        setNewsPage,
        handleLoadNews,
        setNewsPerPage
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
        throw new Error("Sem Contexto")
    }
    return context
}
export { NewsProvider, useNews }