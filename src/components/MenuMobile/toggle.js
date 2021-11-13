import styled from "styled-components"
import { FaBars } from 'react-icons/fa'

const StyledToggle = styled(FaBars)`
    position: fixed;
    top: 2%;
    right: 4%;
    padding: 0.75rem;
    display: flex;
    place-items: center;
    font-size: 4em;
    background-color: rgba(0,0,0,0.3);
    border-radius: ${({theme}) => theme.borders.radius};
    color: ${({theme}) => theme.colors.text.white};
    z-index: 98;

    cursor: pointer;

    @media (min-width: 650px) {
        display: none;
    }
`


const Toggle = ({ handleNavToggle }) => {
    return (
        <StyledToggle onClick={handleNavToggle}/>
    )
}

export default Toggle

