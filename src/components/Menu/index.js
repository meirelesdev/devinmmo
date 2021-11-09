import { useState } from "react";
import { Link } from "react-router-dom";
import * as C from './Styles'

const Menu = props => {
  const [ open, setOpen ] = useState(true)
  const toggleMenu = ()=>{
    setOpen( prev => !prev )
}
  return (
    <C.Nav>
      {open && <button onClick={toggleMenu}>Aperto</button>}
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
      <Link to="/news">News</Link>
    </C.Nav>
  )
}
export default Menu