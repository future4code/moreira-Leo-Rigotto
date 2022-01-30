import react from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL, headers } from "../../constants/urls";

const AddContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: space-between;
margin: 0;
padding: 1px;
`

const StyledInput = styled.input`
    border: 1px solid lightgray;
    background-color: #333333;
    color: white;
    border-radius: 7px;
    padding: 2px 4px;
    margin: 5px 0 0 5px;
    width: 70%;
`

const AddButton = styled.div`
    font-size: 0.8em;
    color: white;
    background: #2C2C2C;
    border: none;
    cursor: pointer;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    :hover{
        background: #333333;
        }
    :active{
        background: #2C2C2C;
        color: lightgray;
        }
`

export default class AddInterface extends react.Component{

    state = {
        name: "",
        artist: "",
        url: ""
    }

    nameHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    artistHandler = (e) => {
        this.setState({
            artist: e.target.value
        })
    }

    urlHandler = (e) => {
        this.setState({
            url: e.target.value
        })
    }

    addSong = () => {
        axios.post(BASE_URL+this.props.playlistId+"/tracks", this.state, headers)
        .then((res) => {
            console.log(res)
            this.setState({
                name: "",
                artist: "",
                url: ""
            })
        })
        .catch((err) => {
            alert(err)
        })
    }

    render(){
        return<AddContainer type="submit" onSubmit={this.addSong}>

            <StyledInput placeholder="Song Name" value={this.state.name} onChange={this.nameHandler} />
            <StyledInput placeholder="Artist" value={this.state.artist} onChange={this.artistHandler} />
            <StyledInput placeholder="URL" value={this.state.url} onChange={this.urlHandler}/>

            <AddButton type="submit" onClick={this.addSong}>Add</AddButton>
        </AddContainer>
    }
}