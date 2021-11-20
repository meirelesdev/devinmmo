import Footer from "../../components/Footer"
import Header from "../../components/Header"
import * as C from './Styles'
import { motion } from "framer-motion"

const Layout = ({ children }) => {
    return (
        <main>
            <Header />
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{diration: 0.5}}
            >
                <C.Section className="content-main">
                    {children}
                </C.Section>
            </motion.div>
            <Footer />
        </main>
    )
}
export default Layout