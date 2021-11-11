import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.background.card};
    border-radius: 10px;
    max-width: 300px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
    transition: 300ms all ease-in-out;

    &:hover {
        transform: ${({theme}) => theme.zoom.card};
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    }

`
export const GameContent = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const CardImage = styled.img`
    width: 100%;
    flex: 1;
    margin-bottom: 10px;
`
export const GameTitle = styled.h2`
    color: ${({theme})=>theme.colors.text.primary};
    font-size: 13pt;
    flex: 1;
    margin-left: 15px;
`
export const GamePlataform = styled.span`
    margin-right: 15px;
    border-radius: 10px;
    border: ${({theme})=>theme.borders.plataform};
    color: #014479;
    font-size: 7pt;
    text-align: center;
    padding: 5px;
    margin-bottom: 10px;
`
export const GameFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;
`
export const GameDescription = styled.p`
    align-self: flex-start;
    margin-bottom: 20px;
    font-size: 10pt;
`
export const GameLink = styled(Link)`
    text-decoration: none;
    color: #014479;
    font-size: 10pt;
    border: ${({theme})=>theme.borders.default};
    border-radius: 3px;
    padding: 5px;
`