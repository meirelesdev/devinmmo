import { AiOutlineDislike, AiOutlineLike, } from 'react-icons/ai'
import { useComments } from '../../hooks/useComments'
import * as C from './Styles'


const Comment = ({comment, ...props}) => {
    const { dispatch } = useComments()
    return (
        <C.CommentContainer >
            <C.UserComent>
                <h4>{comment.name}</h4>
                <p>{comment.comment}</p>
            </C.UserComent>
            <C.CommentLikes>
                <AiOutlineLike onClick={() => {
                    dispatch({
                        type: 'update',
                        index: props.index,
                        payload: {...comment, 
                            votes: ++comment.votes
                        }
                    })
                }} />
                <span 
                    className={`${comment.votes > 0 ?'positive': 'negative' }`}>
                        {comment.votes}
                    </span>
                <AiOutlineDislike onClick={() => {
                    dispatch({
                        type: 'update',
                        index: props.index,
                        payload: {...comment, 
                            votes: --comment.votes
                        }
                    })
                }} />
            </C.CommentLikes>
        </C.CommentContainer >
    )
}
export default Comment