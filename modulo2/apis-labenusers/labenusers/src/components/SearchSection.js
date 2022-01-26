import axios from 'axios';
import styled from 'styled-components';
import react from 'react';

const ListContainer = styled.ul`
  border: 1px solid lightgray;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin: 15px;
  padding: 10px 15px 10px 20px;
  box-shadow: 0 4px 10px gray;
  box-sizing: border-box;
  min-width: fit-content;
  width: 40vw;
`

const UserInput = styled.input`
    border: 2px solid lightgray;
    border-radius: 10px;
    padding: 3px 5px;
    font-size: 1em;
`

const DetailsContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin: 15px;
  padding: 10px 15px 10px 20px;
  box-shadow: 0 4px 10px gray;
  box-sizing: border-box;
  min-width: fit-content;
  width: 40vw;
  p{
      margin: 5px;
      font-weight: bold;
  }
`

const ListItem = styled.li`
    margin: 5px;
    font-size: 1em;
`

const DeleteButton = styled.button`
    background-color: lightcoral;
    border: 0px solid lightgray;
    border-radius: 10px;
    padding: 2px 5px;
    font-size: 0.8em;
    margin: 0 5px;
    cursor: pointer;
    transition: 0.5s ease;
    :hover{
        background-color: coral;
    }
    :active{
        background-color: lightcoral;
    }
`

const EditButton = styled.button`
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 2px 5px;
    font-size: 0.8em;
    margin: 5px 5px;
    cursor: pointer;
    transition: 0.5s ease;
    :hover{
        background-color: lightgray;
    }
    :active{
        background-color: white;
    }
`

const headers = {
    headers: {
        Authorization: "leo-rigotto-moreira"
    }
}

export default class SignupSection extends react.Component {

    state = {
        userList: "",
        detailsScreen: false,
        detailedUser: "",
        editMailInput: "",
        editNameInput: "",
        edit: "Editar"
    }

    getAllUsers = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios
        .get(url, headers)
        .then((res) => {
            this.setState({
                userList: res.data
            })
        })
    }

    componentDidMount(){
        this.getAllUsers()
    }

    onClickDeleteUser = (e) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${e.target.value}`

        if (window.confirm(`Tem certeza que deseja deletar?`)){
        axios
        .delete(url, headers)
        .then(() => {
            alert('Usuário deletado.')
            this.getAllUsers()})
        .catch((err) => {
            alert(err)
            this.getAllUsers()
        })
        } else alert('Usuário não deletado')
    }

    onClickBack = () => {
        this.setState({
            detailsScreen: false
        })
    }

    onClickEdit = () => {
        this.setState({
            edit: "Enviar"
        })
    }

    onClickDetails = (e) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${e.target.value}`

        axios
        .get(url, headers)
        .then((res) => {
        this.setState({     
            detailedUser: res.data,
            detailsScreen: true,
        })
        })
        .catch(() => {
            alert(`Algo deu errado, tente novamente.`)
        })
    }

    onChangeEditEmail = (e) => {
        const input = e.target.value
        this.setState({
            editMailInput: input
        })
    }

    onChangeEditName = (e) => {
        const input = e.target.value
        this.setState({
            editNameInput: input
        })
    }

    onClickConfirmEdit = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.state.detailedUser.id}`
        const body = {
            name: this.state.editNameInput,
            email: this.state.editMailInput
        }
        axios
        .put(url, body, headers)
        .then(() => {
            alert('Novos dados salvos!')
            this.setState({
            editMailInput: "",
            editNameInput: "",
            edit: "Editar",
            detailsScreen: false
            })
            this.getAllUsers()
        })
        .catch(() => {alert('Algo deu errado, tente novamente.')})
    }

    onClickBackEdit = () => {
        this.setState({
            edit: "Editar"
        })
    }

  render() {

    let userList = <ListContainer>
        <p>Sem usuários cadastrados</p>
        </ListContainer>

    if (this.state.userList !== "" && this.state.detailsScreen === false){
        userList = <ListContainer>
        {this.state.userList.map((user) => {
            return <ListItem key={user.id}>
                
                {user.name}

                <EditButton value={user.id} 
                onClick={this.onClickDetails}>
                    Detalhes
                </EditButton>

                <DeleteButton value={user.id} 
                onClick={this.onClickDeleteUser}>
                    X
                </DeleteButton>

            </ListItem>
        })}
        </ListContainer>
    
    } else if (this.state.userList !== "" && this.state.detailsScreen === true && this.state.edit === "Editar"){
        userList = <DetailsContainer>
        <p>Nome: {this.state.detailedUser.name}</p>
        <p>Email: {this.state.detailedUser.email}</p>
        <EditButton onClick={this.onClickEdit}>{this.state.edit}</EditButton>
        <EditButton onClick={this.onClickBack}>Voltar</EditButton>
        </DetailsContainer>
    
    } else if (this.state.edit === "Enviar"){
        userList = <DetailsContainer>
            <p>Editando</p>
        Nome: 
        <UserInput 
        value={this.state.editNameInput}
        onChange={this.onChangeEditName}
        placeholder={this.state.detailedUser.name}/>
        
        Email:
        <UserInput 
        value={this.state.editMailInput}
        onChange={this.onChangeEditEmail}
        placeholder={this.state.detailedUser.email}/>
        
        <EditButton 
        onClick={this.onClickConfirmEdit}>
            {this.state.edit}
        </EditButton>

        <EditButton 
        onClick={this.onClickBackEdit}>
            Cancelar
        </EditButton>

        </DetailsContainer>
    }

  return (
    <>
    {userList}
    </>
  );
  }
}