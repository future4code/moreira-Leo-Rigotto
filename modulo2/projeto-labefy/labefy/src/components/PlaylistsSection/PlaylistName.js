import react from "react";
import styled from "styled-components";

const NameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1em;
    padding: 5px;
    button{
        color: white;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.2em;
        display: none;
        margin: 0;
        border-radius: 10px;
        height: 0.9em;
        :hover{
            background: #2C1010;
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

export function PlaylistName() {
    return(
        <NameContainer>
            playlist
            <button>-</button>
        </NameContainer>
    )
}