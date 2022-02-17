import styled from "styled-components"


const ButtonContainer = styled.button`
    background-color: lightblue;
    border: none;
    padding: 5px;
    border-radius: 5px;
    font-size: 1em;
    font-weight: 500;
`

export const ButtonClassic = (props) => {
    return <ButtonContainer onClick={props.onClick}>
        {props.text}
    </ButtonContainer>
}