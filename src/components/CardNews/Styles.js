import styled from "styled-components";
import { Card, CardImage, GameContent, GameTitle, GameDescription, GameLink } from "../CardGame/Styles";

export const ContanerNews = styled(Card)`
    @media (min-width: 940px) {
        flex-direction: row;
        width: 100%;
        max-width: unset;
        justify-content: space-between;

        &:hover {
            transform: ${({theme}) => theme.zoom.cardNews};
        }
    }
`
export const NewsContent = styled(GameContent)`
    padding-bottom: 20px;

    @media (min-width: 940px) {
        flex-direction: column;
        justify-content: center;

        align-items: space-between;
        height: 300px;
        padding: 10px;
    }

`
export const CardImageNews = styled(CardImage)`
    height: auto;
    
    @media (min-width: 940px) {
        width: 50%;
        margin: 0;
    }
`
export const NewsTitle = styled(GameTitle)`
    margin: 10px auto;
    text-align: center;

    @media (min-width: 940px) {
        margin: 30px;
    }
`
export const NewsDescription = styled(GameDescription)`
        padding: 20px;
`
export const NewsLink = styled(GameLink)`
    
    margin: 0 auto;

    &:hover {
        box-shadow: ${({theme})=>theme.colors.shadow.soft};
        background-color: ${({theme})=>theme.colors.background.primary};
        color: ${({theme})=>theme.colors.text.primary};
    }

    @media (min-width: 940px) {
        margin: unset;
    }
`
export const Buttons = styled.div`
    display: flex;
    flex: 1;

    @media (min-width: 940px) {
        flex: unset;
        justify-content: space-evenly;
    }
`