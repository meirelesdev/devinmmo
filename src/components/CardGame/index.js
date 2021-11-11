import * as C from './Styles'

const CardGame = ({game}) => {
    return (
        <C.Card>
            <C.GameContent>
                <C.CardImage src={game.thumbnail} alt={game.title} />
                <C.GameTitle>{game.title}</C.GameTitle>
                <C.GamePlataform>{game.platform}</C.GamePlataform>
            </C.GameContent>
            <C.GameFooter>
                <C.GameDescription>
                        {game.short_description}
                </C.GameDescription>
                <C.GameLink to={`/games/${game.id}`}>VER MAIS</C.GameLink>
            </C.GameFooter>
        </C.Card>
    )
}

export default CardGame