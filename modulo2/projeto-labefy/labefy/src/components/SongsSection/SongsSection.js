import react from "react"
import styled from "styled-components"
import Details from "./Details"

const SongsContainer = styled.div`
  padding: 15px;
  width: 74%;
`

export default class SongsSection extends react.Component {


  render(){

    let playlistDetail

    if (this.props.playlistId === ""){
      playlistDetail = <p>Select or create a new playlist to view songs</p>
    } else {
      playlistDetail = <Details name={this.props.name} 
      tracksNo={this.props.tracksNo} 
      tracks={this.props.tracks} 
      playlistId={this.props.playlistId}
      list={this.props.list}/>
    }

  return (
    <SongsContainer>
      {playlistDetail}
    </SongsContainer>
  )
}}
