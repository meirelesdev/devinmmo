import * as C from './Styles'

const Menu = props => {
    return (
        <C.StyledMenu>
            <C.StyledLink to="/">Início</C.StyledLink>
            <C.StyledLink to="/games">Jogos</C.StyledLink>
            <C.StyledLink to="/news">Notícias</C.StyledLink>
        </C.StyledMenu>
    )
}

export default Menu