import styled from "styled-components"
import {TripCard} from "../components/TripCard"

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
`

export const TripList = () => {
    return <ListContainer>
        <TripCard/>
    </ListContainer>
}