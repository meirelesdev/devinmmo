import * as C from './Styles'

const Menu = props => {
    return (
        <C.StyledMenu>
            <C.StyledLink to="/">Home</C.StyledLink>
            <C.StyledLink to="/games">Games</C.StyledLink>
            <C.StyledLink to="/news">News</C.StyledLink>
        </C.StyledMenu>
    )
}

export default Menu