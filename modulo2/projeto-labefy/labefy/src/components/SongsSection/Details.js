import react from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { headers } from "../../constants/urls";
import AddSong from "./AddSong";

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`

const Title = styled.p`
    margin: 0;
    padding: 5px;
    font-size: large;
    font-weight: bolder;
    border: 1px solid gray;
    border-radius: 5px;
    width: fit-content;
    color: lightgreen;
`

const SongsCount = styled.p`
    font-size: small;
    margin: 5px;
    font-weight: lighter;
    color: lightgray;
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

export default class Details extends react.Component{

    // state = {
    //     playlistId: this.props.playlistId,
    //     playlistData: "",
    //     tracks: "",
    // }

    // getDetails = () => {

    //     axios.get(BASE_URL, headers)
    //     .then((res) => {
    //         res.data.result.list.filter((item) => {
    //             return item.id === this.state.playlistId
    //         }).map((item) => {
    //             this.setState({
    //                 playlistData: item
    //             })
    //         })
    //     })
    //     .catch((err) => console.log(err.response))

    //     axios.get(BASE_URL+this.state.playlistId+"/tracks", headers)
    //     .then((res) => {
    //         this.setState({
    //             tracks: res.data.result
    //         })
    //     })
    //     .catch((err) => console.log(err.response))
    // }

    // componentDidMount(){
    //     this.getDetails()
    // }

    render(){

        // let trackList

        // if (this.props.tracks !== ""){ setTimeout(() => {
        //     trackList = this.props.tracks.map((song) => {
        //         return <SongItem>
        //         <p>{song.name}</p>
        //         <p>-</p>
        //         <p>{song.artist}</p>
        //         </SongItem>
        //     })
        // }, 2000)   
        // }

        return <DetailsContainer>

            <Title>{this.props.name}</Title>
            <SongsCount>{this.props.tracksNo} songs</SongsCount>
           
            {this.props.tracklist}
            
            <AddSong playlistId={this.props.playlistId}/>
            
        </DetailsContainer>
    }
}