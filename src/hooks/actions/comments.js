const hasComments = (data, key) => {
    const gamesKeys = Object.keys(data.comments)
    if(gamesKeys.length > 0 && gamesKeys.includes(key)) return true
    return false
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
export {
    getAllLocalStorage,
    saveComment,
    updateComment,
    getCommentsByIdGame
}