import styled from "styled-components"
import { ClassicButton } from "./ClassicButton"
import { AiOutlineComment } from "react-icons/ai"
import { BsArrowDownCircle, BsArrowDownCircleFill, BsArrowUpCircleFill, BsArrowUpCircle } from "react-icons/bs"
import axios from "axios"
import { BASE_URL } from "../services/urls"
import { useState } from "react"
import {Post} from "../pages/Post"


const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid lightgrey;
    border-radius: 15px;
    width: 90vw;
    margin: 10px 0; 
    padding: 0 10px;
    .user{
        align-self: center;
        margin: 10px 0;
    }
    .votes{
        display: flex;
        align-items: center;
    }
`

const StyledIcon = styled.div`
    cursor: pointer;
    margin: 5px;
    transition: 300ms ease;
    border-radius: 20px;
    :hover{
        background-color: gray;
        border-radius: 20px;
        color: white;
    }
    :active{
        background-color: black;
        color: white;
    }
`

export const PostCard = (props) => {

    const [commenting, setCommenting] = useState(false)

    const clickDetails = () => {
        setCommenting(!commenting)
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



    return <CardContainer>
        <p className="user">User: {props.username}</p>
        <p className="date">Created at: {props.createdAt}</p>
        <p className="title">Title: {props.title}</p>
        <p className="body">Body: {props.body}</p>
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
        {commenting ? <Post postId={props.id}/> : <></>}
    </CardContainer>
}