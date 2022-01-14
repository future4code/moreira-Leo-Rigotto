import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const NewPostContainer = styled.div`
  display: flex;
  flex: column;
`

const NewPostInput = styled.input`
  
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
      fotoPost: 'https://picsum.photos/200/152'}
    ]
  }

  render() {

    const post = this.state.posts.map((user) => {
      return <Post
      nomeUsuario={user.nomeUsuario}
      fotoUsuario={user.fotoUsuario}
      fotoPost={user.fotoPost}
      />
    })

    return (
      <MainContainer>
        {post}
      </MainContainer>
    );
  }
}

export default App;
