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
  box-shadow: 0 4px 10px gray;
  box-sizing: border-box;
  width: 40vw;
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

const headers = {
    headers: {
        Authorization: "leo-rigotto-moreira"
    }
}

export default class SignupSection extends react.Component {

    state = {
        userList: "",
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
        axios
        .delete(url, headers)
        .then(() => {
            alert(`Usuário apagado`)
            this.getAllUsers()})
        .catch((err) => {
            alert(err)
            this.getAllUsers()
        })
    }

  render() {

    let userList = <p>Sem usuários cadastrados</p>

    if (this.state.userList != ""){
        userList = this.state.userList.map((user) => {
            return <ListItem key={user.id}>
                {user.name}
                <DeleteButton value={user.id}onClick={this.onClickDeleteUser}>X</DeleteButton>
            </ListItem>
        })
    }

  return (
    <ListContainer>
    {userList}
    </ListContainer>
  );
  }
}