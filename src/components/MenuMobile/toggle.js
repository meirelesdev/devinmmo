import styled from "styled-components"
import { FaBars } from 'react-icons/fa'

const StyledToggle = styled(FaBars)`
    position: fixed;
    top: 2%;
    right: 4%;
    color: ${({theme}) => theme.colors.text.primary};
    padding: 0.75rem;
    display: flex;
    place-items: center;
    font-size: 4em;

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

