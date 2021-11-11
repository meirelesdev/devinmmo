import styled from "styled-components";
import { Card, CardImage, GameContent, GameTitle, GameDescription, GameLink } from "../CardGame/Styles";

export const ContanerNews = styled(Card)`
    @media (min-width: 768px) {
        flex-direction: column;
    }
`
export const NewsContent = styled(GameContent)`
    padding-bottom: 20px;

`
export const CardImageNews = styled(CardImage)`
`
export const NewsTitle = styled(GameTitle)`
    margin: 10px auto;
    text-align: center;
`
export const NewsDescription = styled(GameDescription)`
`
export const NewsLink = styled(GameLink)`
    margin: 0 auto;
`