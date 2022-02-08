import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { base_URL, headers } from "../services/urls"

const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
`

const User = styled.li`
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 10px;
    width: 95%;
    margin: 10px 0;
    padding: 0;
    transition: 300ms ease;
    p{
        font-size: 1.2em;
        font-weight: bold;
    }
    .photo{
        border-radius: 50px;
        margin: 5px 10px;
        width: 60px;
        height: 60px;
        overflow: hidden;
        img{
            width: 110px;
            transform: translateX(-25%);
        }
    }
    :hover{
        background-color: lightsteelblue;
    }
`

export const MatchList = () => {

    const [matches, setMatches] = useState([])

    const getMatches = () => {
        axios.get(base_URL+'matches', headers)
        .then((res) => setMatches(res.data.matches))
        .catch((err) => console.log(err.response))
    }

    useEffect(getMatches, [])

    const matchList = matches.map((user) => {
        return <User key={user.id}>
            <div className="photo"> 
                <img src={user.photo} alt="user"/>
            </div>
            <p>{user.name}</p>
        </User>
        })

    const renderList = (matches.length !== 0 ? matchList : <img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" alt="carregando..."/>)


    return <ListContainer>

        {renderList}
        
    </ListContainer>
}