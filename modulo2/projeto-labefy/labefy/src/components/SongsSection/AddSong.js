import react from "react";
import axios from "axios";
import styled from "styled-components";
import AddInterface from "./AddInterface";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    button{
        font-size: 0.8em;
    color: white;
    background: #2C2C2C;
    border: none;
    cursor: pointer;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    transition: 0.5s ease;
    :hover{
        background: #333333;
        }
    :active{
        background: #2C2C2C;
        color: lightgray;
        }
    }
`

export default class AddSong extends react.Component{

    state = {
        adding: false,
    }

    addClick = () => {
        this.setState({
            adding: !this.state.adding
        })
    }

    render(){

        let addButton = (this.state.adding ? null : <button onClick={this.addClick}>Add Song</button> )
        let addInterface = (this.state.adding ? <AddInterface addClick={this.state.addClick} playlistId={this.props.playlistId}/> : null)

        return <Container>
            
            {addButton}

            {addInterface}

       </Container>
    }
}