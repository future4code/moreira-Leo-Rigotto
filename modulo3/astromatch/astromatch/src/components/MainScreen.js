import { useEffect, useState } from "react";
import styled from "styled-components";
import { DislikeButton } from "./DislikeButton";
import { Header } from "./Header";
import { LikeButton } from "./LikeButton";
import { UserCard } from "./UserCard";
import { MatchList } from "./MatchList";
import axios from "axios";
import { base_URL, headers } from "../services/urls";

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 700px;
  border: 1px solid lightgray;
  box-shadow: 0 4px 8px lightgray;
  border-radius: 15px;
  box-sizing: border-box;
  @media screen and (max-width: 800px) {
      width: 100vw;
      height: 100vh;
      border-radius: 0;
  }
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export const MainScreen = () => {

    const [matchScreen, setMatchScreen] = useState(false)
    const [profile, setProfile] = useState([])

    const getProfile = () => {
        axios.get(base_URL+"person", headers)
        .then((res) => {setProfile(res.data.profile)})
        .catch((err) => {console.log(err.response)})
    }

    useEffect(() => getProfile(), [])

    const changeScreen = () => {
        setMatchScreen(v => !v)
    }

    const like = () => {
        const data = JSON.stringify({
        "id": profile.id,
        "choice": true
        })

        const config = {
        method: 'post',
        url: 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rigotto/choose-person',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        }

        axios(config)
        .then(() => getProfile())
        .catch(function (err) {
        console.log(err);
        })
    }

    const dislike = () => {
        const data = JSON.stringify({
            "id": profile.id,
            "choice": false
            })
    
            const config = {
            method: 'post',
            url: 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rigotto/choose-person',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
            }
    
            axios(config)
            .then(() => getProfile())
            .catch(function (err) {
            console.log(err);
            })
    }

    const renderCard = () => {
        return <UserCard 
            key={profile.id}
            like={like} 
            photo={profile.photo} 
            name={profile.name} 
            age={profile.age} 
            bio={profile.bio}
        />
    }

    let card = (profile.length !== 0 ? renderCard() : <img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" alt="carregando..."/>)

    let screen  // renders the main screen

    if (matchScreen) screen = <MatchList/>
    else screen = <>

        {card}

        <ButtonsContainer>

            <DislikeButton dislike={dislike}/>

            <LikeButton like={like}/>

        </ButtonsContainer>
     </>


    return <ScreenContainer>
        <Header matchScreen={matchScreen} changeScreen={changeScreen} getProfile={getProfile}/>

        {screen}

    </ScreenContainer>
}