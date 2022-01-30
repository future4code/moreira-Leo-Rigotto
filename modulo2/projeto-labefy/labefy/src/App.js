import react from "react"
import PlaylistsSection from "./components/PlaylistsSection/PlaylistsSection"
import SongsSection from "./components/SongsSection/SongsSection"
import styled from "styled-components"
import { GlobalStyle } from "./theme/GlobalStyle"
import axios from "axios"
import { BASE_URL } from "./constants/urls"
import { headers } from "./constants/urls"

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
  min-height: 70vh;
`

const SongItem = styled.div`
    display: flex;
    margin: 5px;
    margin-top: 15px;
    padding: 5px;
    width: 100%;
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
    p{
        margin: 0 10px;
        font-weight: bolder;
    }
`


export default class App extends react.Component {

  state = {
    playlistId: "",
    playlistData: "",
    tracks: 0,
    songs: 0,
  }

  getId = (e) => {
    this.setState({
      playlistId: e.target.attributes.value.value
    })
    this.getDetails()
  }

getDetails = () => {

    axios.get(BASE_URL, headers)
    .then((res) => {
        res.data.result.list.filter((item) => {
            return item.id === this.state.playlistId
        }).map((item) => {
            this.setState({
                playlistData: item
            })
        })
    })
    .catch((err) => console.log(err.response))

    axios.get(BASE_URL+this.state.playlistId+"/tracks", headers)
    .then((res) => {
        this.setState({
            tracks: res.data.result.quantity,
            songs: res.data.result.tracks
        })
    })
    .catch((err) => console.log(err.response))
}

  render(){

        let trackList

        if (this.state.songs !== 0){
            trackList = this.state.songs.map((song) => {
             return <SongItem>
              <p>Titulo</p>
            </SongItem>
            
            // this.state.tracks.tracks.map((song) => {
            //     return <SongItem>
            //     <p>{song.name}</p>
            //     <p>-</p>
            //     <p>{song.artist}</p>
            //     </SongItem>
            // })
        })}

  return (
    <AppContainer>
      <GlobalStyle/>
      <PlaylistsSection getId={this.getId}/>
      <SongsSection 
        playlistId={this.state.playlistId} 
        name={this.state.playlistData.name} 
        tracksNo={this.state.tracks} 
        tracks={this.state.tracks.tracks}
        list={trackList}/>
    </AppContainer>
  )
}}
