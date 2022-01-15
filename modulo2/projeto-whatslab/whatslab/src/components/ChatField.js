import React from "react";
import styled from "styled-components";
import { UserMessage } from "./UserMessage";
import { FriendMessage } from "./FriendMessage";

const ChatContainer = styled.div`
    border: 1px solid black;
    border-radius: 15px;
    width: 100vw;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
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
    margin: 0px 3px;
`

const InputUserStyled = styled.input`
    align-self: center;
    border: 1px solid gray;
    border-radius: 30px;
    width: 20%;
    padding: 5px 10px;
`

const SendButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
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
    img{
        width: 18px;
        padding-left: 3px;
    }
`

export class ChatField extends React.Component{

    state = {
        messages: [],
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
        let newMsgs = [...this.state.messages,
            {user: this.state.inputUser,
            text: this.state.inputMsg}
            ]
        if (this.state.inputUser && this.state.inputMsg !== ''){
        this.setState({
            messages: newMsgs,
            inputUser: '',
            inputMsg: ''
        })}
    }

    onKeyDownSendMsg = (event) => {
        if(event.key === "Enter"){
            this.sendMsg()
        }
    }

    deleteMsg = (key) => {
        console.log("apaguei")
        // let dltMsg = this.state.messages.splice(key, 1)
        // this.setState({
        //     messages: dltMsg
        // })
    }


    render(){

        const novaMsg = this.state.messages.map((msg, i) => {
            if(msg.user.toLowerCase() === "eu"){
                return <UserMessage
                key={i} 
                message={msg.text}/>
            } else {
                return <FriendMessage 
                key={i}
                sender={msg.user} 
                message={msg.text}/>
            }
        })

        return <ChatContainer>

            {novaMsg}

            <InputContainer>

             <InputUserStyled 
             placeholder="Nome"
             value={this.state.inputUser}
             onChange={this.onChangeUser}/>
             <InputMsgStyled 
             placeholder="Mensagem"
             value={this.state.inputMsg}
             onChange={this.onChangeMsg}
             onKeyDown={this.onKeyDownSendMsg}/>
             <SendButton type="submit" onClick={this.sendMsg}><img src="https://cdn-icons-png.flaticon.com/512/60/60525.png" alt="Enviar"/></SendButton>

             </InputContainer>

        </ChatContainer>
    }}