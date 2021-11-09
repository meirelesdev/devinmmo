import { useState } from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Menu'
import Toggle from '../Menu/toggle'
import * as C from './Styles'
import { BsSearch } from "react-icons/bs";

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
            <div>
                <BsSearch />
            </div>
            {open && <Menu handleNavToggle={toggleMenu} />}
        </C.Header>
    )
}
export default Header