import Layout from "../../template/Layout"
import notFound from '../../assets/404.jpg'
import * as C from './Styles'


const NotFound = (props) => {
    return (
        <Layout>
            <C.Container>
                <img src={notFound} alt="Pagina não encontrada." />
            </C.Container>
        </Layout>
    )
}

export default NotFound