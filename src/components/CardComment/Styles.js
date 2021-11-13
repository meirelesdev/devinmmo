import styled from "styled-components"

export const CommentContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    justify-content: space-between;
`
export const UserComent = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    & h4 {
        margin: 10px;
    }
    & p {
        margin: 10px;
        font-weight: 600;
        letter-spacing: 1.5px;
    }
`
export const CommentLikes = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #ccc;
    border-radius: 5px;
    min-width: 100px;

    & span {
        margin: 10px;
        font-size: 18pt;
        font-weight: 600;
    }
    & span.negative {
        color: red;
    }
    & span.positive {
        color: green
    }
    & svg {
        font-size: 25pt;
        cursor: pointer;
        border-radius: 50%;
        width: 35px;
        padding: 5px;
    }
    & svg:active {
        background-color: white;
    }
    & svg:first-child {
        color: green;
    }
    & svg:last-child {
        color: red;
    }
    @media (min-width: 768px ) {
        min-width: 200px;
    }
`