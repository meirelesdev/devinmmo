
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import Layout from '../../template/Layout'
import ContainerGameSingle from "../../components/ContainerGameSingle"
import FormComment from "../../components/FormComment"
import ListComment from '../../components/ListComments'
import { getGame } from "../../services/api"
import { useComments } from "../../hooks/useComments"

const PageGame = () => {
    const [game, setGame] = useState([])
    const { id } = useParams()
    const history = useHistory()
    const { state, dispatch } = useComments()

    const submitComment = (values, osSubmitProps) => {
        dispatch({type:'save', payload: values})
        osSubmitProps.resetForm()
    }
    useEffect(() => {
        (async () => {
            try{
                setGame([{ ...await getGame(id) }])
            } catch(e) {
                history.push('/gameNotFound')
            }
        })()
        dispatch({type: 'getOne', payload: id})
    }, [id, dispatch, history])

    return (
        <Layout title="Game Single" isHome={false}>
            {game.length !== 0 && (
                <ContainerGameSingle game={game[0]} >
                    <FormComment idGame={id} handleOnSubmit={submitComment} />
                    <ListComment comments={state} />
                </ContainerGameSingle>
            )}
        </Layout>
    )
}
export default PageGame