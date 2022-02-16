import styled from "styled-components"
import { GiRocketFlight } from "react-icons/gi"

const LogoContainer = styled.div`
    display: flex;
    color: white;
    align-items: baseline;
    .labe{
        font-size: 1.2em;
        font-weight: 400;
    }
    .x{
        font-size: 1.4em;
        font-weight: 450;
    }
    .icon{
        margin-left: -5px;
    }
`

export const Logo = () => {
    return <LogoContainer>
        <p className="labe">Labe</p><p className="x">X</p>
        <GiRocketFlight className="icon"/>
    </LogoContainer>
}