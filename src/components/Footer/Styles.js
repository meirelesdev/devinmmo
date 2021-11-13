import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    min-height: 100px;
    margin-top: 10px;
    background-color: ${({ theme }) => theme.colors.background.header};
    box-shadow: ${({ theme }) => theme.colors.shadow.footer.primary};
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
        color: red;
        font-size: 15pt;
    }
`