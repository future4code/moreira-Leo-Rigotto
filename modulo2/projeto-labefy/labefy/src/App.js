import react from "react"
import PlaylistsSection from "./components/PlaylistsSection/PlaylistsSection"
import SongsSection from "./components/SongsSection/SongsSection"
import styled from "styled-components"
import { GlobalStyle } from "./theme/GlobalStyle"

const AppContainer = styled.div`
  border: 1px solid gray;
  border-radius: 20px;
  margin: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 15px black;
  background: #1E1E1E;
  overflow: hidden;
  color: white;
  display: flex;
  width: 70vw;
  height: 70vh;
`


export default class App extends react.Component {

  render(){

  return (
    <AppContainer>
      <GlobalStyle/>
      <PlaylistsSection/>
      <SongsSection/>
    </AppContainer>
  )
}}
