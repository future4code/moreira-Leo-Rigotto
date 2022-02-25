import styled from "styled-components"

const StyledButton = styled.button`
    margin: 5px;
    width: fit-content;
    border: none;
    padding: 10px;
    background-color: orange;
    cursor: pointer;
    border-radius: 10px;
    transition: 300ms ease;
    :hover{
        background-color: darkorange;
    }
`

export const ClassicButton = (props) => {
    return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
}