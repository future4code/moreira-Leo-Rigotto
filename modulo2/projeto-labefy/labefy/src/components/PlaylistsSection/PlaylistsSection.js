import react from "react"
import styled from "styled-components"
import { PLaylistsHeader } from "./PlaylistsHeader"
import { PlaylistName } from "./PlaylistName"
import NameInput from "./NameInput"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { headers } from "../../constants/urls"

const PlaylistsContainer = styled.div`
    border-right: 1px solid gray;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 26%;
`

const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid gray;
`

export default class PlaylistsSection extends react.Component {

    state = {
        createPlaylist: "new playlist",
        playlists: "",
        hideList: true,
    }

    createPlaylist = () => {
        if (this.state.createPlaylist === "new playlist"){
        this.setState({
            createPlaylist: "^",
            hideList: true
        })
        } else if (this.state.createPlaylist === "^") {
            this.setState({
                createPlaylist: "new playlist",
                hideList: true
            })
        }
    }

    getPlaylists = () => {
        axios.get(BASE_URL, headers)
        .then((res) => {
            this.setState({playlists: res.data.result.list})
        })
        .catch((err) => console.log(err.response))
    }

    hideList = () => {
        this.setState({
            hideList: !this.state.hideList
        })
    }

    componentDidMount(){
        this.getPlaylists()
    }

  render(){

    // renders the name of the playlists
    if (this.state.playlists !== "") {
        this.playlistsList = this.state.playlists.map((pl) => {
            return <PlaylistName id={pl.id} getId={this.props.getId} key={pl.id} buttonId={pl.id} update={this.getPlaylists} title={pl.name}/>
        })
    } else this.playlistsList = <PlaylistName title="carregando..."/>

    // hides the list of playlists
    let listRender
    if (this.state.hideList) {
        listRender = <ListContainer>
        {this.playlistsList}
    </ListContainer>
    }

    // makes the input for a new playlist appear
    let playlistCreator
    if (this.state.createPlaylist === "^") playlistCreator = <NameInput update={this.getPlaylists}/>

    // persist the background color of the lower button
    const PlusButton = styled.button`
    color: white;
    background: ${() => this.state.createPlaylist ? '#2F2F2F' : 'none'};
    border: none;
    display: ${() => this.state.hideList ? 'block' : 'none'};
    justify-self: flex-end;
    cursor: pointer;
    font-size: 0.8em;
    margin: 0;
    padding: 2px 0;
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
        <PLaylistsHeader createPlaylist={this.createPlaylist} hideList={this.hideList} hidden={this.state.hideList}/>
           
        {listRender}
                

        {playlistCreator}

        <PlusButton onClick={this.createPlaylist}>{this.state.createPlaylist}</PlusButton>
    </PlaylistsContainer>
  )
}}
