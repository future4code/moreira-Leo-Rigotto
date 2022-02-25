import axios from "axios"
import { BASE_URL } from "../services/urls"
import { useForm } from "../hooks/useForm"
import { ClassicButton } from "./ClassicButton"
import styled from "styled-components"
import { Loading } from "../assets/Loading"

const FormContainer = styled.form`
    margin: 15px;
    border: 1px solid lightgray;
    border-radius: 15px;
    box-shadow: 0 5px 15px gray;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: appear 300ms ease forwards;
    overflow: hidden;
    @keyframes appear {
        from {height: 0; opacity: 0%}
        to {height: 100px; opacity: 100%}
    }
`

export const CreatePost = (props) => {

    const {form, handleChange, clearForm} = useForm({title: "", body: ""})

    let buttonText = 'Enviar'

    const createPost = (e) => {
        e.preventDefault()

        buttonText = <Loading/>

        axios.post(BASE_URL+'/posts', form, {headers: {Authorization: localStorage.getItem("tokenLabeddit")}})
        .then((res) => {
            alert(res.data)
            props.clear()
        })
        .catch((err) => console.log(err.response.data))
    }

 
    return  <FormContainer type='submit' onSubmit={createPost}>
        <p>Criar Post</p>
        <input name="title" placeholder="Título" onChange={handleChange}/>
        <input name="body" placeholder="Mensagem" onChange={handleChange}/>
        <ClassicButton text={buttonText}/>
    </FormContainer>
}