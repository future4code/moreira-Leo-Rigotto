import react from "react"
import styled from "styled-components"
import { FlexContainer } from "../../constants/FlexContainer"

const Title = styled.p`
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;
`

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-left: 15px;
    button{
        color: white;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.2em;
        display: none;
        margin: 0;
        border-radius: 5px;
        :hover{
            background: #333333;
        }
        :active{
            background: #2C2C2C;
            color: lightgray;
        }
    }
    :hover{
        button{
            display: flex;
            align-items: center;
        }
    }
`

export function PLaylistsHeader(props) {
    return(
        <HeaderContainer>
            <Title>Playlists</Title>
            <button onClick={props.createPlaylist}>+</button>
        </HeaderContainer>
    )
}