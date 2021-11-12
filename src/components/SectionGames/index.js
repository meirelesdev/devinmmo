import styled from "styled-components"
import CardGame from "../CardGame"

const ContainerGame = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    max-width: 1260px;
    gap: 20px;
`
const SectionGames = ({games}) => {
    return (
        <ContainerGame>
            {games && games.map((game, index) => (
                <CardGame key={ `${game.id}-${index}`} game={game} />
            ))}
        </ContainerGame>
    )
}

export default SectionGames