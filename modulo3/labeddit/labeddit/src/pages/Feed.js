import axios from "axios"
import { useEffect, useState } from "react"
import { PostCard } from "../components/PostCard"
import { BASE_URL } from "../services/urls"
import { Loading } from "../assets/Loading"
import styled from "styled-components"
import { CreatePost } from "../components/CreatePost"
import { useNavigate } from "react-router-dom"
import { ClassicButton } from "../components/ClassicButton"

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
`

export const Feed = () => {
  const [posts, setPosts] = useState()
  const [showCreate, setShowCreate] = useState(false)
  const navigate = useNavigate()
  const [size, setSize] = useState(10)

  const token = localStorage.getItem("tokenLabeddit")

  useEffect(() => {
    const getPosts = () => {
      axios
        .get(BASE_URL + `/posts?size=${size}`, {
          headers: { Authorization: token },
        })
        .then((res) => setPosts(res.data))
        .catch((err) => {
          alert(err.response.data)
          localStorage.removeItem("tokenLabeddit")
          navigate("/login")
        })
    }
    token ? getPosts() : navigate("/login")
  }, [posts, navigate, token, size])

  const createPost = () => {
    setShowCreate(!showCreate)
  }

  const postFeed = posts ? (
    posts.map((post) => {
      return (
        <PostCard
          key={post.id}
          id={post.id}
          username={post.username}
          createdAt={post.createdAt}
          commentCount={post.commentCount}
          title={post.title}
          body={post.body}
          voteSum={post.voteSum}
          userVote={post.userVote}
        />
      )
    })
  ) : (
    <Loading />
  )

  let renderFeed = posts ? (
    <div>
      {postFeed}
      <button onClick={() => setSize(size + 10)}>teste</button>
    </div>
  ) : (
    <Loading showText={"carregando feed..."} />
  )

  return (
    <FeedContainer>
      {showCreate ? (
        <CreatePost clear={createPost} />
      ) : (
        <ClassicButton
          style={{ width: "100%" }}
          text={"Novo post"}
          onClick={createPost}
        />
      )}

      {renderFeed}
    </FeedContainer>
  )
}
