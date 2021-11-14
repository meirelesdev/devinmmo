import Comment from '../CardComment'
import * as C from './Styles'

const ListComment = ({ comments }) => {
    return (
            <C.Container>
                {comments.length > 0 ? comments.map((comment, index)=>(
                    <Comment key={`${comment.id}-${index}`} comment={comment} index={index}/>
                )): <p>Jogo ainda sem Comentários. Deixe sua opinião.</p>}
            </C.Container>
        )
}

export default ListComment