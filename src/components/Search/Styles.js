import styled from "styled-components"
import { RiSearch2Line } from 'react-icons/ri';


export const ContainerSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    flex: 1;

    @media (min-width: 364px) {
        justify-content: center;
    }
    @media (min-width: 664px) {
        justify-content: flex-end;
        margin: 0;
        flex: 1;
    }
`
export const InputSearch = styled.input`
    padding: 10px;
    border: 3px;
    border-radius: 5px;    
    margin: 5px;
    width: 100%;
    transition: 0.3s all ease-in-out;
    outline: none;

    &.hide {
        width: 1px;
        pointer-events:none;
        opacity: 0;
    }
`
export const SearchIcon = styled(RiSearch2Line)`
    margin-right: 20px;
    font-size: 20pt;
    /* border-radius: 100%; */
    /* padding: 3px; */
    /* background: #a1a1a1; */
    /* box-shadow: ${({ theme }) => theme.colors.shadow.white}; */
    /* color: ${({ theme }) => theme.colors.text.primary}; */

`
