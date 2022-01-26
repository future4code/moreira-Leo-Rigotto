import styled from 'styled-components';
import react from 'react';
import SignupSection from './components/SignupSection.js';
import SearchSection from './components/SearchSection.js'

const AppContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const StyledButton = styled.button`
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

export default class App extends react.Component {

  state = { 
    signup: true
  }

  onClickChangeScreen = () => {
    this.setState({
      signup: !this.state.signup
    })
  }
  
  render() {

    let mainScreen

    if (this.state.signup === true) {
      mainScreen = <>
      <SignupSection/>
      <StyledButton onClick={this.onClickChangeScreen}>Buscar Usuários</StyledButton>
      </>
    } else {
      mainScreen = <>
      <SearchSection/>
      <StyledButton onClick={this.onClickChangeScreen}>Criar Usuário</StyledButton>
      </>
    }

  return (
    <AppContainer>
      {mainScreen}
    </AppContainer>
  );
  }
}