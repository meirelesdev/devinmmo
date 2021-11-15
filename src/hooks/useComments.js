import { createContext, useContext, useReducer } from "react"
import { commentReducer } from "./reducers/comments"

const CommentsContext = createContext()

const initialState = []

export const useComments = ()=>{
    const context = useContext(CommentsContext)
    if(!context) throw new Error("Sem acesso aos comentarios.")
    return context
}
const CommentsProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(commentReducer, initialState)
    return (
        <CommentsContext.Provider value={{state, dispatch}}>
            {children}
        </CommentsContext.Provider>
    )
}
export default CommentsProvider
