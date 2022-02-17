import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../services/urls"

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const goTo = useNavigate()

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const body = {
            email: email,
            password: password
        }
        axios.post(BASE_URL+'/login', body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            goTo('/admin')
        })
        .catch((err) => console.log(err.response))
    }


    return <div>
        <form type="submit" onSubmit={handleSubmit}>
            <input 
            placeholder="email"
            type="email"
            value={email}
            onChange={handleEmail}
            />
            <input 
            placeholder="senha"
            type="password"
            value={password}
            onChange={handlePassword}
            />
            <button type="submit" onClick={handleSubmit}>Enviar</button>
        </form>
    </div>
}