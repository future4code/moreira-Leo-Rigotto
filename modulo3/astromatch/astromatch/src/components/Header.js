import styled from "styled-components"
import { Logo } from "../assets/Logo"
import { RiUserHeartLine, RiUserHeartFill } from "react-icons/ri"
import { BiReset } from "react-icons/bi"

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    height: 40px;
    width: 100%;
    .icon{
        margin: 0 15px;
        font-size: 1.5em;
        color: #753192;
        cursor: pointer;
        transition: 300ms ease;
        :hover{
            transform: scale(1.1);
        }
    }
`



export const Header = (props) => {
    return <HeaderContainer>
        <BiReset className="icon"/>
        <Logo/>
        {props.matchScreen ? <RiUserHeartFill className="icon" onClick={props.changeScreen}/> : <RiUserHeartLine className="icon" onClick={props.changeScreen}/> }
    </HeaderContainer>
}