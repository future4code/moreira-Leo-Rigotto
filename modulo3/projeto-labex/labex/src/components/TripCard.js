import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
    border-radius: 15px;
    height: fit-content;
    width: 90%;
    overflow: hidden;
`

const PlanetPhoto = styled.div`
    width: 100%;
    height: 350px;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`


export const TripCard = (props) => {

    const goTo = useNavigate()

    let cardId = props.id

    const planet = props.planet
    let planetImage

    switch (planet){
        case "Marte":
            planetImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/640px-OSIRIS_Mars_true_color.jpg"
            break
        case "Júpiter":
            planetImage = "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg"
            break
        case "Mercúrio":
            planetImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg"
            break
        case "Vênus":
            planetImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/280px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg"
            break
        case "Terra":
            planetImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/300px-The_Earth_seen_from_Apollo_17.jpg"
            break
        case "Saturno":
            planetImage = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg"
            break
        case "Urano":
            planetImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/280px-Uranus2.jpg"
            break
        case "Netuno":
            planetImage = "https://www.infoescola.com/wp-content/uploads/2008/04/netuno.jpg"
            break
        case "Plutão":
            planetImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
            break
        default:
            planetImage = "https://s5.static.brasilescola.uol.com.br/be/2021/09/galaxia-do-triangulo.jpg"
        }

    return <CardContainer>
        <PlanetPhoto image={planetImage}/>
        <p className="title">{props.title}</p>
        <p className="description">{props.description}</p>
        <p className="planet">Planeta: {props.planet}</p>
        <p className="duration">Duração: {props.duration}</p>
        <p className="date">Data: {props.date}</p>
        <button onClick={() => goTo(`/viewtrip/${cardId}`)}></button>
    </CardContainer>
}