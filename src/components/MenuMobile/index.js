import ToggleTheme from '../ToggleTheme'
import * as C from './Styles'

const MenuMobile = ({ handleNavToggle }) => {
    return (
        <C.StyledMenu>
            <div className="animate__animated animate__fadeInRight">
                <ToggleTheme />
            </div>
            <C.StyledLink className="animate__animated animate__fadeInRight" to="/">Início</C.StyledLink>
            <C.StyledLink className="animate__animated animate__fadeInRight" to="/games">Jogos</C.StyledLink>
            <C.StyledLink className="animate__animated animate__fadeInRight" to="/news">Noticias</C.StyledLink>
            <C.CloseToggle className="animate__animated animate__fadeInRight" onClick={handleNavToggle} />
        </C.StyledMenu>
    )
}

export default MenuMobile