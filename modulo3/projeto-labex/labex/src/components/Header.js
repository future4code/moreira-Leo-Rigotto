import styled from "styled-components"
import {Logo} from "../assets/Logo"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 15px;
    width: 100%;
    background-color: #3866FF;
    color: white;
`

export const Header = () => {
  return <Container>
      <Logo/>
  </Container>
}
