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
color: #222;
    text-decoration: none;
    font-size: clamp(1em, 2vw, 3vw);
    border-radius: 5px;
    margin:  10px 0; 
    padding: 15px;
    transition: 0.2s all ease-in-out;
    
    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -ms-user-select: none;

    &:hover{
        transition: .2s all ease-in-out;
        color:${({theme}) => theme.colors.text.primary};
        background-color: ${({theme}) => theme.colors.background.secondary};
        box-shadow: ${({theme}) => theme.colors.shadow.primary};
    }
   
`