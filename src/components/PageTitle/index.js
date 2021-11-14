import styled from "styled-components"
const StyledTitle = styled.div`
    width: 100%;
    margin: auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1200px;
    & > h1 {
        margin: 20px;
        font-weight: 600;
        text-shadow: ${({theme}) => theme.colors.shadow.text};
    }

    @media (min-width: 624px ) {
        flex-direction: row;
        justify-content: center;
        & > h1 {
            margin-left: 20px;
        }
    }
`

const TitleContent = ({pageTitle, children}) => {
    return (
        <StyledTitle>
            {children}
            <h1>{pageTitle}</h1>
        </StyledTitle>
    )
}
export default TitleContent