import { useParams } from "react-router"
import Layout from "../../components/Layout"

const PageNewsSingle = props => {
    const { id } = useParams()

    console.log(id)
    return (
        <Layout title="News Single" isHome={false}>
            <div><p>Conteudo da News Sngle</p></div>
        </Layout>
    )
}

export default PageNewsSingle