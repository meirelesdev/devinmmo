import Header from "../Header"
import * as C from './Styles'

const Layout = ({ children,  isHome }) => {
    return (
        <main>
            <Header show={isHome}/>
            <C.Section>
                {children}
            </C.Section>
        </main>
    )
}

export default Layout