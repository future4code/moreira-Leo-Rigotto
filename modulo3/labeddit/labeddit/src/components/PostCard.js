import styled from "styled-components"
import { ClassicButton } from "./ClassicButton"
import { AiOutlineComment } from "react-icons/ai"
import { BsArrowDownCircle, BsArrowDownCircleFill, BsArrowUpCircleFill, BsArrowUpCircle } from "react-icons/bs"
import axios from "axios"
import { BASE_URL } from "../services/urls"
import { useState } from "react"
import {Post} from "../pages/Post"

const AnimateDiv = styled.div`
    transition: 300ms ease;
    animation: appear 300ms ease;
    overflow: hidden;
    @keyframes appear {
        from {height: 0px}
        to {height: 100px}
    }
`


const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid lightgrey;
    border-radius: 15px;
    width: 90vw;
    margin: 10px 0; 
    overflow: hidden;
    transition: 500ms ease;

    .user{
        align-self: center;
        margin: 10px 0;
    }
    .votes{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .footer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid lightgray;
        margin-top: 15px;
        background-color: whitesmoke;
        padding: 0 10px;
        font-size: 1em;
        font-weight: 600;
        button{
            font-size: 1em;
            font-weight: 600;
        }
    }
`

const StyledIcon = styled.div`
    cursor: pointer;
    margin: 5px;
    transition: 300ms ease;
    border-radius: 50px;
    :active{
        color: white;
        background-color: black;
    }
`

export const PostCard = (props) => {

    const [commenting, setCommenting] = useState(false)

    const clickDetails = () => {
        setCommenting(!commenting)
        calculateTime()
    }

    const buttonText = <div style={{display: 'flex', alignItems: 'center',}}>
        <p>{props.commentCount ? props.commentCount : 0}</p> 
        <AiOutlineComment/>
        </div>
 
    const vote = (direction) => {
        const body = {direction: direction}

        if (props.userVote === direction) {
            axios.delete(BASE_URL+'/posts/'+props.id+'/votes', {headers: {Authorization: localStorage.getItem("tokenLabeddit")}})
            .then()
            .catch((err) => console.log(err.response.data))
        } else {
            axios.post(BASE_URL+'/posts/'+props.id+'/votes', body, {headers: {Authorization: localStorage.getItem("tokenLabeddit")}})
            .then()
            .catch((err) => console.log(err.response.data))
        }
    }


    let today = new Date()

    const calculateTime = () => {
        const postTime = new Date(props.createdAt)
        const timeInMinutes = (parseInt(((today - postTime) / 1000) / 60))
        if (timeInMinutes < 60){
            return `${timeInMinutes} minutos`
        } else if (timeInMinutes >= 60 && timeInMinutes < 120){
            return `1 hora`
        } else if (timeInMinutes >= 120 && timeInMinutes < 2280){
            return `${parseInt(timeInMinutes / 60)} horas`
        } else return `${parseInt((timeInMinutes / 60) / 24)} dias`
    }


    return <CardContainer>
        <p className="user">User: {props.username}</p>
        <p className="date">{calculateTime()} atrás.</p>
        <p className="title">Title: {props.title}</p>
        <p className="body">Body: {props.body}</p>
        <div className="footer"> 

            <div className="votes">
                <StyledIcon onClick={() => vote(1)}>
                    {props.userVote === 1 ? <BsArrowUpCircleFill/> : <BsArrowUpCircle/>}
                </StyledIcon>     
                <p>
                    {props.voteSum ? props.voteSum : 0}
                </p>
                <StyledIcon onClick={() => vote(-1)}>
                    {props.userVote === -1 ? <BsArrowDownCircleFill/> : <BsArrowDownCircle/>}
                </StyledIcon> 
            </div>

            <ClassicButton id={props.id} text={buttonText} onClick={clickDetails}/>

        </div>

        {commenting ? <AnimateDiv> <Post postId={props.id}/> </AnimateDiv> : <></>}
       
    </CardContainer>
}