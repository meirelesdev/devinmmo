import styled from "styled-components";
import { Card } from "../CardGame/Styles";
import  {ContainerGame} from '../SectionGames'

export const Container = styled(ContainerGame)`
`
export const LoaderItem = styled(Card)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
    
    background-color: ${({ theme })=> theme.colors.background.loader};

    & svg {
        width: 100%;
        /* color: black; */
    }
`