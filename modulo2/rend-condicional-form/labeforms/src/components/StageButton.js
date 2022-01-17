import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border-radius: 10px;
    border: 1px solid lightgray;
    background-color: #f1f1f1;
    transition: 0.5s ease;
    :hover{
        background-color: lightgray;
    }
`

export class StageButton extends React.Component{
    render(){
        return <StyledButton onClick={this.props.onClick}>Próximo</StyledButton>

    }
}