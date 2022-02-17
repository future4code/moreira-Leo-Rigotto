import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ButtonClassic } from "../components/ButtonClassic"

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FirstSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 60vh;
    img{
        height: 50%;
    }
`

export const HomePage = () => {

    const goTo = useNavigate()

    return <PageContainer>

        <FirstSection>
            
            <img src="https://exame.com/wp-content/uploads/2020/06/foguete-Falcon-9-Space-X-Starlink.jpg" alt="Foguete voando"/>
            <h1>Voe Longe</h1>
            <h2>Viagens espaciais para quem tem a cabeça na lua</h2>

            <ButtonClassic text={"Viagens Disponíveis"} onClick={() => goTo('/trips')}/>
        
        </FirstSection>

    </PageContainer>
}