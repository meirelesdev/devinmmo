import { CardGame } from "../CardGame"

export const SectionGames = props => {
    return (
        <section>
            {props.games > 0 && (
                props.games.map((game, index) => (
                    <CardGame key={index} game={game} />
                ))
            )
            }
        </section>
    )
}

