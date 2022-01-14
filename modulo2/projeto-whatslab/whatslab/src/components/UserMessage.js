import React from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
    border: 1px solid lightgray;
    border-radius: 10px 10px 0px 10px;
    background-color: lightskyblue;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-end;
    margin: 0 15px 10px 15px;
    box-shadow: 2px 4px 8px lightgray;
    p{
        margin: 0;
        padding: 0px 10px 5px 10px;
        word-wrap: break-word;
        max-width: 98%;
    }
    h1{
        align-self: flex-start;
        margin: 0;
        padding: 3px 8px;
        font-size: small;
        color: #0000009d;
    }
`

export class UserMessage extends React.Component{
    render() {
        return (
             <MessageContainer>
                <h1>{this.props.sender}</h1>
                <p>{this.props.message}</p>
             </MessageContainer>
        );
    }
}