import styled from "styled-components"


export const Header = styled.header`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.background.header};
    color: ${({theme})=> theme.colors.text.white};
    font-weight: 800;
    box-shadow: ${({ theme }) => theme.colors.shadow.header.primary};
    margin-bottom: 10px ;

    .logo {
        margin-top: 20px;
        margin-left: 10px;
    }
    .logo a{
        /* font-size: 15pt; */
        font-weight: 800;
        text-decoration: none;        
        color: ${({theme})=> theme.colors.text.white};
        text-shadow: ${({theme})=> theme.colors.shadow.text};
        
    }
    @media (min-width: 425px) {
        flex-direction: row;
        min-height: 100px;
    }
    @media (min-width: 768px) {
        justify-content: space-evenly;
        align-items: center;
        .logo {
            margin-top: unset ;
        }
    }
`
export const Logo = styled.div`
    & a {
        font-size: 25pt;
    }
`