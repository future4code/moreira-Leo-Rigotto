import axios from "axios"
import { BASE_URL } from "../services/urls"
import { useForm } from "../hooks/useForm"
import { ClassicButton } from "./ClassicButton"


export const CreateComment = (props) => {

    const {form, handleChange, clearForm} = useForm({body: ""})

    const createPost = (e) => {

        e.preventDefault()

        axios.post(BASE_URL+'/posts/'+props.postId+'/comments', form, {headers: {Authorization: localStorage.getItem("tokenLabeddit")}})
        .then((res) => {
            alert(res.data)
            clearForm()
        })
        .catch((err) => console.log(err.response.data))
    }

    return <form type='submit' onSubmit={createPost}>
        <p>Comentar</p>
        <input name="body" placeholder="Comentário" onChange={handleChange}/>
        <ClassicButton text="Enviar"/>
    </form>
}