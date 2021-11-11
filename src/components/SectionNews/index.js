import styled from "styled-components"
import CardGame from "../CardGame"
import CardNews from "../CardNews"

const ContainerNews = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* padding: 2%; */
    margin: 0 auto;
    max-width: 1260px;
    gap: 20px;
`
const SectionNews = ({news}) => {

    return (
        <ContainerNews>
            {news && news.map((item) => (
                <CardNews key={item.id} news={item} />
            ))}
        </ContainerNews>
    )
}

export default SectionNews