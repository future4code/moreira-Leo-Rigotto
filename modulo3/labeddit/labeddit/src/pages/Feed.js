import axios from "axios"
import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { PostCard } from "../components/PostCard"
import { BASE_URL } from "../services/urls"
import { Loading } from "../assets/Loading"
import styled from "styled-components"
import { CreatePost } from "../components/CreatePost"
import { useNavigate } from "react-router-dom"

const FeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Feed = () => {

    const [posts, setPosts] = useState()
    const navigate = useNavigate()
    
    const token = localStorage.getItem("tokenLabeddit")

    useEffect(() => {
        (token ? getPosts() : navigate('/login'))
    }, [posts, navigate, token])

    const getPosts = () => {
        axios.get(BASE_URL+'/posts', {headers: {Authorization: token}})
        .then((res) => {
            setPosts(res.data)
        })
        .catch((err) => {
            alert(err.response.data)
            localStorage.removeItem("tokenLabeddit")
            navigate('/login')
        })
    }

    const postFeed = (posts ? posts.map((post) => {
        return <PostCard key={post.id}
        id={post.id}
        username={post.username}
        createdAt={post.createdAt}
        commentCount={post.commentCount}
        title={post.title}
        body={post.body}
        voteSum={post.voteSum}
        userVote={post.userVote}/>
    }) : <Loading/>)

    let renderFeed = (posts ? postFeed : <Loading/>)

    return <FeedContainer>
        <Header/>

        <CreatePost/>
        
        {renderFeed}
        
    </FeedContainer>
}