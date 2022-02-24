import styled from "styled-components"

const StyledButton = styled.button`
    margin: 5px;
    width: fit-content;
    border: none;
    padding: 8px;
    background-color: orange;
    cursor: pointer;
    border-radius: 10px;
`

export const ClassicButton = (props) => {
    return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
}