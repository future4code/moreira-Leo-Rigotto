import axios from "axios"
import { BASE_URL } from "../services/urls"
import { useForm } from "../hooks/useForm"
import { ClassicButton } from "./ClassicButton"
import styled from "styled-components"
import { Loading } from "../assets/Loading"
import { useState } from "react"

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
    const [buttonText, setButtonText] = useState('Enviar')

    const createPost = (e) => {
        e.preventDefault()

        setButtonText(<Loading size={'1.3em'}/>)

        axios.post(BASE_URL+'/posts', form, {headers: {Authorization: localStorage.getItem("tokenLabeddit")}})
        .then((res) => {
            clearForm()
            setButtonText('Enviar')
        })
        .catch((err) => console.log(err.response.data))
    }

 
    return  <FormContainer type='submit' onSubmit={createPost}>
        <p>Criar Post</p>
        <input name="title" value={form.title} placeholder="Título" onChange={handleChange} required/>
        <input name="body" value={form.body} placeholder="Mensagem" onChange={handleChange} required/>
        <ClassicButton text={buttonText}/>
    </FormContainer>
}