import React from "react";
import styled from "styled-components";
import { UserMessage } from "./UserMessage";
import { FriendMessage } from "./FriendMessage";

const ChatContainer = styled.div`
    border: 1px solid black;
    border-radius: 15px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

// input styling

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    height: 35px;
    border-top: 1px solid lightgray;
`

const InputMsgStyled = styled.input`
    align-self: center;
    border: 1px solid gray;
    border-radius: 30px;
    width: 60%;
    padding: 5px 10px;
`

const InputUserStyled = styled.input`
    align-self: center;
    border: 1px solid gray;
    border-radius: 30px;
    width: 20%;
    padding: 5px 10px;
`

const SendButton = styled.button`
    height: 30px;
    width: 30px;
    border: 1px solid gray;
    border-radius: 30px;
    background-color: mediumaquamarine;
    cursor: pointer;
    :hover{
        background-color: mediumseagreen;
    }
    :active{
        background-color: seagreen;
    }
`

export class ChatField extends React.Component{

    state = {
        messages: {
            msg: {
                user: 'Teste',
                text: 'Teste'
            },
        },
        inputUser: '',
        inputMsg: '',
    }

    onChangeUser = (event) => {
        this.setState({
            inputUser: event.target.value
        })
    }

    onChangeMsg = (event) => {
        this.setState({
            inputMsg: event.target.value
        })
    }

    sendMsg = () => {
        let newMsgs = {...this.state.messages,
        msg: {
            user: this.state.inputUser,
            text: this.state.inputMsg
        }}
        if (this.inputUser && this.inputMsg !== ''){
        this.setState({
            messages: {newMsgs},
            inputUser: '',
            inputMsg: ''
        })}
        console.log(this.state.messages)
        console.log(newMsgs)
    }

    render(){
        
        // const newMsg = this.state.map((msg) => {
        //     return <UserMessage 
        //     sender={msg.user} 
        //     message={msg.text}/>
        // })

        return <ChatContainer>
            {/* {newMsg} */}
            <UserMessage sender={this.state.messages.msg.user} message={this.state.messages.msg.text}/>
            <FriendMessage sender={this.state.messages.msg.user} message={this.state.messages.msg.text}/>
           
            <InputContainer>

             <InputUserStyled 
             placeholder="Nome"
             value={this.state.inputUser}
             onChange={this.onChangeUser}/>
             <InputMsgStyled 
             placeholder="Mensagem"
             value={this.state.inputMsg}
             onChange={this.onChangeMsg}/>
             <SendButton onClick={this.sendMsg}>{'>'}</SendButton>

             </InputContainer>

        </ChatContainer>
    }}