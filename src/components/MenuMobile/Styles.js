import { Link } from "react-router-dom";
import { FaTimes } from 'react-icons/fa'
import styled from "styled-components";

export const StyledMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    
    @media screen and (min-width: 790px) {
        width: 60%;
    }
    background-color: ${({theme}) => theme.colors.background.primary};
    opacity: 0.96;
    z-index: 99;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const StyledLink = styled(Link)`
    color: #222;
    text-decoration: none;
    font-size: clamp(3rem, 4vw, 6vw);
    margin:  10px 0; 
    padding: 15px;
    border-radius: 5px;
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
export const CloseToggle = styled(FaTimes)`
    position: fixed;
    top: 5%;
    right: 4%;
    background-color: #222;
    color: #fff;
    padding: .75rem;
    display: flex;
    place-items: center;
    font-size: 3rem;
    cursor: pointer;
`