import { createContext, useContext, useReducer } from "react"

const CommentsContext = createContext()

export const useComments = ()=>{
    const context = useContext(CommentsContext)
    if(!context) throw new Error("Sem acesso aos comentarios.")
    return context
}

const getAllLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("comments"))
    if (data) return data
    const empytComments = {
        comments: {}
    }
    localStorage.setItem("comments", JSON.stringify(empytComments))
    return empytComments
}
const hasComments = (data, key) => {
    const gamesKeys = Object.keys(data.comments)
    if(gamesKeys.length > 0 && gamesKeys.includes(key)) return true
    return false
}

const saveComment = (key, values) => {
    const data = getAllLocalStorage("comments")
    if(hasComments(data, key)) {
        data.comments[key].push(values)
        localStorage.setItem("comments", JSON.stringify(data))
        return
    }
    data.comments[key] = [values]
    localStorage.setItem("comments", JSON.stringify(data))
}

const updateComment = (index, comment) => {
    const data = getAllLocalStorage('comments')
    data.comments[comment.idGame][index] = comment
    localStorage.setItem("comments", JSON.stringify(data))
}
const getCommentsByIdGame = (key)=>{
    const data = getAllLocalStorage("comments")
    if(hasComments(data, key)) return data.comments[key]
    return []
}

const commentReducer = (state, action) => {
    switch(action.type){
        case 'update':
            updateComment(action.index, action.payload)
            return getCommentsByIdGame(action.payload.idGame)
        case 'save':
            saveComment(action.payload.idGame, action.payload)
            return getCommentsByIdGame(action.payload.idGame)
        case 'getOne':
            return getCommentsByIdGame(action.payload)
        default:
            return state
    }
}
const initialState = []
const CommentsProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(commentReducer, initialState)
    return (
        <CommentsContext.Provider value={{state, dispatch}}>
            {children}
        </CommentsContext.Provider>
    )
}
export default CommentsProvider
