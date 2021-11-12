import styled from "styled-components"


export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100px;
    background-color: ${({ theme }) => theme.colors.background.header};
    color: white;
    font-weight: 800;

    .logo {
        padding: 10px;
        margin: 10px;
    }
    .logo a{
        font-size: 15pt;
        text-decoration: none;        
        color: unset;
        letter-spacing: 1px;
        
    }
`
export const Logo = styled.div`
    & a {
        font-size: 30pt;
    }
`