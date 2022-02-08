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
  width: 30vw;
  height: 80vh;
  border: 1px solid lightgray;
  box-shadow: 0 4px 8px lightgray;
  border-radius: 15px;
  box-sizing: border-box;
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

    useEffect(() => {
        getProfile()
    }, [])

    const changeScreen = () => {
        setMatchScreen(v => !v)
    }

    const like = () => {
        // alert('curtiu')
    }

    const dislike = () => {
        // alert('não curtiu')
    }

    let cards // renders the cards

    let screen  // renders the main screen

    if (matchScreen) screen = <MatchList/>
    else screen = <>

        <UserCard 
            key={profile.id}
            like={like} 
            photo={profile.photo} 
            name={profile.name} 
            age={profile.age} 
            bio={profile.bio}
        />

        <ButtonsContainer>

            <DislikeButton dislike={dislike}/>

            <LikeButton like={like}/>

        </ButtonsContainer>
     </>


    return <ScreenContainer>
        <Header matchScreen={matchScreen} changeScreen={changeScreen}/>

        {screen}

    </ScreenContainer>
}