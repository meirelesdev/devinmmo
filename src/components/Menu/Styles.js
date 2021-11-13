import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledMenu = styled.div`
    display: none;

    @media (min-width: 650px) {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.text.primary};
        display: flex;
        justify-content: space-evenly;
        flex-basis: 50%;
    }    
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: clamp(1em, 2vw, 3vw);
    margin:  10px 0; 
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme})=> theme.colors.text.white};
    border-radius: ${({theme}) => theme.borders.radius};
    transition: 0.2s all ease-in-out;
    
    &:hover{
        transition: .2s all ease-in-out;
        color:${({theme}) => theme.colors.text.primary};
        background-color: ${({theme}) => theme.colors.background.secondary};
        box-shadow: ${({theme}) => theme.colors.shadow.primary};
    }
   
`