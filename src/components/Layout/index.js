import { Banner } from "../Banner"
import Header from "../Header"
import * as C from './Styles'

const Layout = ({ children, banner }) => {
    return (
        <main>
            <Header />
            {banner && <Banner />}
            <C.Section>
                {children}
            </C.Section>
        </main>
    )
}

export default Layout