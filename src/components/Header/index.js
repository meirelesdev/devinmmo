import { Link } from 'react-router-dom'
import Menu from '../Menu'
import * as C from './Styles'

const Header = props => (
    <C.Header>
        <div className="logo">
            <Link to="/">
            DEVinMMO
            </Link>
        </div>
        <Menu />
    </C.Header>
)

export default Header