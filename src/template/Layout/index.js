import Footer from "../../components/Footer"
import Header from "../../components/Header"
import * as C from './Styles'

const Layout = ({ children }) => {
    return (
        <main>
            <Header />
            <C.Section>
                {children}
            </C.Section>
            <Footer/>
        </main>
    )
}
export default Layout