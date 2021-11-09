import { Banner } from "../Banner"
import Header from "../Header"
import * as C from './Styles'

const Layout = ({title, children, banner}) => {
    return (
    <main>
        <Header />
        <h2>{title}</h2>
        {banner && <Banner/>}
        <C.Section>
            {children}
        </C.Section>
    </main>
    )
}

export default Layout