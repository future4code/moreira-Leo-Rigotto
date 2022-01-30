import axios from "axios";
import react from "react";
import styled from "styled-components";
import { BASE_URL, headers } from "../../constants/urls";

const NameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1em;
    padding: 5px;
    cursor: pointer;
    word-break: break-all;
    p{
            margin: 0;
            padding: 0;
            max-width: 80%;
        }
    button{
        color: red;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 0.5em;
        display: none;
        margin: 0;
        border-radius: 10px;
        height: 0.9em;
        padding: 5px;
        min-width: fit-content;
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

export function PlaylistName(props) {

    const deletePlaylist = (e) => {
        axios.delete(BASE_URL+e.target.value, headers)
        .then((res) => {
            alert(`Playlist deletada com sucesso!`)
            props.update()
        })
        .catch((err) => {alert('Ocorreu um erro. Tente novamente.')})
    }

    return(
        <NameContainer>
            <p value={props.buttonId} onClick={props.getId}>{props.title}</p>
            <button onClick={deletePlaylist} value={props.buttonId}>apagar</button>
        </NameContainer>
    )
}