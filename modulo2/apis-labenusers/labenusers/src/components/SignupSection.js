import axios from 'axios';
import styled from 'styled-components';
import react from 'react';

const InputContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  margin: 15px;
  box-shadow: 0 4px 10px gray;
  width: 40vw;
`

const UserInput = styled.input`
    border: 2px solid lightgray;
    border-radius: 10px;
    padding: 3px 5px;
    font-size: 1em;
`

const InputButton = styled.button`
    background-color: lightblue;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 5px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s ease;
    :hover{
        background-color: skyblue;
    }
    :active{
        background-color: lightblue;
    }
`

const headers = {
    headers: {
        Authorization: "leo-rigotto-moreira"
    }
}

export default class SignupSection extends react.Component {

    state = {
        email: "",
        name: ""
    }

    onChangeInputEmail = (e) => {
        const input = e.target.value
        this.setState({
            email: input
        })
    }

    onChangeInputName = (e) => {
        const input = e.target.value
        this.setState({
            name: input
        })
    }

    postData = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const body = {
            name: this.state.name,
            email: this.state.email
        }
        axios
        .post(url, body, headers)
        .then(() => {
            alert(`Usuário "${this.state.name}" criado com sucesso!`)
            this.setState({
                email: "",
                name: ""
            })
        })
        .catch((err) => {
            if(err.response.data.message === "User information are missing. Name and email are required."){
                alert('É obrigatório digitar nome e email para prosseguir')
            } else if (err.response.data.message === "Invalid email") {
                alert('Por favor digite um email válido.')
            } else alert('Erro ao criar usuário. Tente novamente.')
        })
    }

  render() {
  return (
    <InputContainer>
        <UserInput 
        type="email" 
        value={this.state.email} 
        onChange={this.onChangeInputEmail} 
        placeholder='email'/>

        <UserInput 
        type="text" 
        value={this.state.name} 
        onChange={this.onChangeInputName} 
        placeholder='nome'/>

        <InputButton onClick={this.postData}>Enviar</InputButton>
    </InputContainer>
  );
  }
}