import * as C from './Styles'

const MenuMobile = ({ handleNavToggle }) => {
    return (
        <C.StyledMenu>
            <C.StyledLink className="animate__animated animate__fadeInRight" to="/">Home</C.StyledLink>
            <C.StyledLink className="animate__animated animate__fadeInRight" to="/games">Games</C.StyledLink>
            <C.StyledLink className="animate__animated animate__fadeInRight" to="/news">News</C.StyledLink>
            <C.CloseToggle className="animate__animated animate__fadeInRight" onClick={handleNavToggle} />
        </C.StyledMenu>
    )
}

export default MenuMobile