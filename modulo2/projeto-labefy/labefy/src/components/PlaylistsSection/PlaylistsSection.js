import react from "react"
import styled from "styled-components"
import { PLaylistsHeader } from "./PlaylistsHeader"
import { PlaylistName } from "./PlaylistName"
import NameInput from "./NameInput"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { headers } from "../../constants/urls"

const PlaylistsContainer = styled.div`
    width: 25%;
    border-right: 1px solid gray;
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
`

export default class PlaylistsSection extends react.Component {

    state = {
        createPlaylist: true,
        playlists: []
    }

    createPlaylist = () => {
        this.setState({
            createPlaylist: !this.state.createPlaylist
        })
    }

    componentDidMount(){
        axios.get(BASE_URL, headers)
        .then((res) => this.setState({playlists: res.data}))
        .catch((err) => console.log(err.response.data))
}

  render(){

    let playlistCreator
    if (this.state.createPlaylist) {playlistCreator = <NameInput/>}

    const PlusButton = styled.button`
    color: white;
    justify-self: flex-end;
    background: ${() => this.state.createPlaylist ? '#2F2F2F' : 'none'};
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    margin: 0;
    border-radius: 20px;
    transition: 0.3s ease;
    :hover{
        background: #333333;
    }
    :active{
        background: #2C2C2C;
        color: lightgray;
    }
`
    
  return (
    <PlaylistsContainer>
    <PLaylistsHeader createPlaylist={this.createPlaylist}/>

    <PlaylistName/>
    <PlaylistName/>
    <PlaylistName/>
    <PlaylistName/>
    <PlaylistName/>

    {playlistCreator}

    <PlusButton onClick={this.createPlaylist}>+</PlusButton>
    </PlaylistsContainer>
  )
}}
