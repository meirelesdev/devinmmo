import { StyledLink } from '../MenuMobile/Styles'
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
export const StyledLinkMenu = styled(StyledLink)`
    font-size: clamp(1em, 2vw, 3vw);
    display: flex;
    align-items: center;
    margin: 0 10px;
    border-bottom: none;

   
`