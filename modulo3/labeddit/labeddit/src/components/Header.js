import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../assets/Logo";
import { useCheck } from "../hooks/useCheck";
import { ClassicButton } from "./ClassicButton";

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: orangered;
    color: white;
    button{
        margin: 5px 10px;
    }
`

export const Header = () => {


    const navigate = useNavigate()

    const isLoggedIn = useCheck()

    let headerButton = (isLoggedIn.checked ? <ClassicButton 
        text={"Logout"} 
        onClick={() => {
            localStorage.removeItem('tokenLabeddit')
            navigate('/login')
        }}
        /> : 
        <ClassicButton 
        text={"Login"} 
        onClick={() => navigate('/login')}
        />)

    return <HeaderContainer>
        <Logo onClick={() => navigate('/')}/>
        {headerButton}
    </HeaderContainer>
}