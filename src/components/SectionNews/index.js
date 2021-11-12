import styled from "styled-components"

import CardNews from "../CardNews"

const ContainerNews = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    max-width: 1260px;
    gap: 20px;
    
    @media (min-width: 940px) {
        flex-direction: column;
        width: 100%;
    }

`
const SectionNews = ({news}) => {

    return (
        <ContainerNews>
            {news && news.map((item, index) => (
                <CardNews key={ `${item.id}-${index}`} news={item} />
            ))}
        </ContainerNews>
    )
}

export default SectionNews