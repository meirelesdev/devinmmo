import { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuMobile from '../MenuMobile'
import Menu from '../Menu'
import Toggle from '../MenuMobile/toggle'
import * as C from './Styles'


const Header = props => {
    const [open, setOpen] = useState(false)
    const toggleMenu = () => {
        setOpen(prev => !prev)
    }

    return (
        <C.Header>
            <Toggle handleNavToggle={toggleMenu} />
            <div className="logo">
                <Link to="/">DEVinMMO</Link>
            </div>
            {open && <MenuMobile handleNavToggle={toggleMenu} />}
            <Menu />
        </C.Header>
    )
}
export default Header