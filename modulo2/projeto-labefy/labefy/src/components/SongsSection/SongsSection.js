import react from "react"
import styled from "styled-components"

const SongsContainer = styled.div`
    width: 75%;
    padding: 15px;
`

export default class SongsSection extends react.Component {

  render(){

  return (
    <SongsContainer>
        Songs
    </SongsContainer>
  )
}}
