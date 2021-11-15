import { updateComment, getCommentsByIdGame, saveComment } from '../actions/comments'

export const commentReducer = (state, action) => {
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