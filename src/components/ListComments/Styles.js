import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: ${({theme}) => theme.borders.radius};
    box-shadow: ${({theme}) => theme.colors.shadow.soft};
    padding: 2%;
`