import styled from "styled-components"

export const Container = styled.div`
    margin: auto;
    padding: 2%;

    width: 100%;
    max-width: 1260px;

    background-color: ${({theme}) => theme.colors.background.card};
    border-radius: 10px;

    box-shadow: ${({theme}) => theme.colors.shadow.primary};
`
export const Title = styled.h1`
    font-weight: 600;
    margin: 10px;
`
export const InfoGame = styled.div`
    display: flex;    
    flex-direction: column;
    justify-content: flex-start;

    @media (min-width: 624px){
        flex-direction: row;
    }
`
export const InfoTitle = styled.strong`
    margin: 10px 20px;
`
export const InfoContent = styled.p`
    margin: 5px 20px;
`
export const RequestSystem = styled(Container)`
    background-color: #606060;
    
    color: ${({ theme }) => theme.colors.text.black};
    border: 1px solid rgba(0,0,0,0.5);
    box-shadow: ${({ theme }) => theme.colors.shadow.primary};
    margin: 20px 0px;

    & > h3 {
        font-weight: 600;
        margin-bottom: 5px;
    }
`
export const ContainerField = styled.div`
    & {
        display: flex;
        justify-content: flex-start;
        border-bottom: 1px solid white;
    }
    & strong {
        flex: 1;
        text-align: right;
    }
    & p {
        flex: 1;
        font-size: 10pt;
        text-align: left;
    }
`