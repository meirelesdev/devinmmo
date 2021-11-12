import { useParams } from "react-router"
import Layout from "../../components/Layout"

const PageGame = props => {
    const { id } = useParams()

    console.log(id)
    return (
        <Layout title="Game Single" isHome={false}>
            <div><p>Conteudo da Game Sngle</p></div>
        </Layout>
    )
}

export default PageGame