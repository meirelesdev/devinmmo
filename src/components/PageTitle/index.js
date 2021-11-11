
import { Children } from "react"
import styled from "styled-components"

const StyledTitle = styled.div`
    width: 100%;
    margin: auto;
    max-width: 1200px;
    & > h1 {
        padding: 25px;
        text-shadow: ${({theme}) => theme.colors.shadow.text};
    }
`

const TitleContent = ({pageTitle}) => {
    return (
        <StyledTitle>
            <h1>{pageTitle}</h1>
        </StyledTitle>
    )
}
export default TitleContent