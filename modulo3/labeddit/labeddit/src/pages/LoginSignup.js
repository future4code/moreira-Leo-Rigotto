import { useNavigate } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import { useCheck } from "../hooks/useCheck"
import styled from "styled-components"
import { useState } from "react"
import { login } from "../services/urls"
import { ClassicButton } from "../components/ClassicButton"
import { Loading } from "../assets/Loading"
import axios from "axios"
import { BASE_URL } from "../services/urls"

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ModeButton = styled.button`
    transition: 500ms ease;
    background-color: ${(props) => props.buttonColor};
`

export const LoginSignup = () => {

    const [mode, setMode] = useState({mode: "Login", loginButtonColor: "lightsteelblue", signupButtonColor: "white"})
    const {form, handleChange, clearForm} = useForm({username: "", email: "", password: ""})
    const [buttonText, setButtonText] = useState(mode.mode)
    const navigate = useNavigate()
    const isLoggedIn = useCheck()



    const login = (body, path) => {
        axios.post(BASE_URL+'/users/login', body)
        .then((res) => {
            localStorage.setItem('tokenLabeddit', res.data.token)
            navigate('/feed')
        })
        .catch((err) => console.log(err.response.data))
    }

    const submitLogin = (e) => {
        e.preventDefault()
        setButtonText(<Loading/>)
        login(form, () => navigate('/feed'))
    }

    const submitSignUp = (e) => {
        e.preventDefault()
        setButtonText(<Loading/>)

        axios.post(BASE_URL+'/users/signup', form)
        .then((res) => {
            localStorage.setItem('tokenLabeddit', res.data.token)
            navigate('/feed')
    })
        .catch((err) => alert(err.response.data))
    }

    let loginForm = <FormContainer type="submit" onSubmit={submitLogin}>
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required/>
            <input name="password" type="password" placeholder="Senha" onChange={handleChange} required/>
            <ClassicButton text={buttonText}/>
        </FormContainer>

    let signUpForm = <FormContainer type="submit" onSubmit={submitSignUp}>
            <input name="username" type="text" placeholder="Nome de Usuário" onChange={handleChange} required/>
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required/>
            <input name="password" type="password" placeholder="Senha" onChange={handleChange} required/>
            <ClassicButton text={buttonText}/>
        </FormContainer>

    const renderPage = <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{display: "flex"}}>
            <ModeButton 
                buttonColor={mode.loginButtonColor} 
                onClick={() => {
                    setMode({
                    mode: "Login", 
                    loginButtonColor: "lightsteelblue", 
                    signupButtonColor: "white"
                })
                    setButtonText('Login')
                }}>
                Login
            </ModeButton>

            <ModeButton 
                buttonColor={mode.signupButtonColor}
                onClick={() => {
                    setMode({
                    mode: "Cadastrar", 
                    loginButtonColor: "white", 
                    signupButtonColor: "lightsteelblue"
                })
                    setButtonText('Cadastrar')
                }}>
                 Cadastro
            </ModeButton>
        </div>

        {mode.mode === "Login" ? loginForm : signUpForm}

    </div>

    return <div>
        {isLoggedIn.checked ? navigate('/feed') : renderPage}
    </div>
}