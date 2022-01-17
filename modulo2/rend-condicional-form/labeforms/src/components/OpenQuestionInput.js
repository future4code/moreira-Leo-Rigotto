import React from 'react';
import styled from 'styled-components'

const InputContainer = styled.div`
    width: 100%;
    p{
        font-weight: bold;
        text-align: center;
        margin: 0.5em;
    }
`

const StyledInput = styled.input `
    width: 50%;
    border-radius: 30px;
    margin: 0.5em;
    padding: 0.1em 0.5em;
    font-size: 1em;
    height: fit-content;
`

export class OpenQuentionInput extends React.Component{
    render() {
        return <InputContainer>
        <p>{this.props.question}</p>
            <StyledInput 
        placeholder={this.props.placeholder} 
        onChange={this.props.onChange} type={this.props.type}
        value={this.props.value}/>
        </InputContainer>
    }
}