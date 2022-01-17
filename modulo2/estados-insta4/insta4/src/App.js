import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const BotaoNewPost = styled.button`
  cursor: pointer;
  border-radius: 5px;
  font-size: larger;
  font-weight: bolder;
  width: 35px;
  height: 35px;
  margin: 10px;
  background-color: white;
`

const NewPostContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const NewPostInput = styled.input`
    border-radius: 5px;
    margin: 5px;
`

const BotaoEnviar = styled.button`
  cursor: pointer;
  border-radius: 5px;
  font-size: large;
  margin: 10px;
  background-color: white;
`

class App extends React.Component {

  state = {
    posts: [
      {nomeUsuario: 'fefa',
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: 'https://picsum.photos/200/150'},

      {nomeUsuario: 'larry',
      fotoUsuario: "https://picsum.photos/50/51",
      fotoPost: 'https://picsum.photos/200/151'},

      {nomeUsuario: 'letisga',
      fotoUsuario: "https://picsum.photos/50/52",
      fotoPost: 'https://picsum.photos/200/152'}],
    inputUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: "",
    criandoPost: false,
  }

  newPost = () => {
    this.setState({
      criandoPost: !this.state.criandoPost
    })
  }

  onChangeNomeUsuarioNovo = (event) => {
    this.setState({
      inputUsuario: event.target.value,
    })
  }

  onChangeFotoUsuarioNovo = (event) => {
    this.setState({
      inputFotoUsuario: event.target.value,
    })
  }

  onChangeFotoPostNovo = (event) => {
    this.setState({
      inputFotoPost: event.target.value,
    })
  }

  criarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.inputUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost,
    }
    const  novoArrPost = [...this.state.posts, novoPost]
    this.setState({posts: novoArrPost})
    this.setState({
      inputUsuario: "",
      inputFotoUsuario: "",
      inputFotoPost: "",
    })
    this.setState({criandoPost: false})
  }

  render() {

    const post = this.state.posts.map((user) => {
      return <Post
      nomeUsuario={user.nomeUsuario}
      fotoUsuario={user.fotoUsuario}
      fotoPost={user.fotoPost}
      />
    })

    let componenteNovoPost
    let buttonText = "+"

    if(this.state.criandoPost) {
      buttonText = "^"
      componenteNovoPost = <NewPostContainer>
      <NewPostInput
      placeholder='Usuário'
      value={this.state.inputUsuario}
      onChange={this.onChangeNomeUsuarioNovo}/>
      <NewPostInput
      placeholder='Foto Usuário'
      value={this.state.inputFotoUsuario}
      onChange={this.onChangeFotoUsuarioNovo}/>
      <NewPostInput
      placeholder='Foto Post'
      value={this.state.inputFotoPost}
      onChange={this.onChangeFotoPostNovo}/>
      <BotaoEnviar onClick={this.criarPost}>Enviar</BotaoEnviar>
    </NewPostContainer>
    }

    return (
      <MainContainer>
        {componenteNovoPost}
        <BotaoNewPost onClick={this.newPost}>{buttonText}</BotaoNewPost>
        {post}
      </MainContainer>
    );
  }
}

export default App;
