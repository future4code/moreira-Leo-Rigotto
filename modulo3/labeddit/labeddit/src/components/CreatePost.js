import axios from "axios"
import { BASE_URL } from "../services/urls"
import { useForm } from "../hooks/useForm"
import { ClassicButton } from "./ClassicButton"
import { useNavigate } from "react-router-dom"


export const CreatePost = () => {

    const {form, handleChange, clearForm} = useForm({title: "", body: ""})
    const navigate = useNavigate()

    const createPost = (e) => {

        e.preventDefault()

        axios.post(BASE_URL+'/posts', form, {headers: {Authorization: localStorage.getItem("tokenLabeddit")}})
        .then((res) => {
            alert(res.data)
        })
        .catch((err) => console.log(err.response.data))
    }

    return <form type='submit' onSubmit={createPost}>
        <p>Criar Post</p>
        <input name="title" placeholder="Título" onChange={handleChange}/>
        <input name="body" placeholder="Mensagem" onChange={handleChange}/>
        <ClassicButton text="Enviar"/>
    </form>
}