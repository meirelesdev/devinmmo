import styled from "styled-components"
import CardGame from "../CardGame"

const ContainerGame = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* padding: 2%; */
    margin: 0 auto;
    max-width: 1260px;
    gap: 20px;
`
const SectionGames = ({games}) => {
    return (
        <ContainerGame>
            {games && games.map((game) => (
                <CardGame key={game.id} game={game} />
            ))}
        </ContainerGame>
    )
}

export default SectionGames