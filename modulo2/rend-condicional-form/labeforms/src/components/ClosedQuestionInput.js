import React from 'react';
import styled from 'styled-components'

const InputContainer = styled.div`
    width: 100%;
    label{
        font-weight: bold;
        text-align: center;
        margin: 0.5em;
    }
`

const StyledInput = styled.select `
    width: 70%;
    margin: 0.8em;
    padding: 0.1em 0.5em;
    font-size: 1em;
`

export class ClosedQuestionInput extends React.Component{
    render() {
        return <InputContainer>
        <label htmlFor={this.props.placeholder}>{this.props.question}</label>
            
            <StyledInput 
            name={this.props.placeholder}
            onChange={this.props.onChange}>

            {this.props.options}

        </StyledInput>
        </InputContainer>
    }
}