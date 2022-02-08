import styled from "styled-components"

const CardContainer = styled.div`
    margin: 10px 0;
    border: 1px solid lightgray;
    border-radius: 10px;
    box-shadow: 0 5px 6px lightgray;
    width: 80%;
    height: 80%;
    align-content: center;
    justify-content: space-between;
    overflow: hidden;
`
const ImageContainer = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
    img{
        height: 100%;
    }
`

const DataContainer = styled.div`
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
    
    height: fit-content;
    .name{
        margin: 0;
        cursor: default;
        display: flex;
        align-items: baseline;
        font-weight: bolder;
        color: white;
        margin-left: 10px;
        .title{
            font-size: 1.5em;
            margin: 0;
        }
        .age{
            font-size: 1.2em;
            margin: 10px;
            margin-left: 5px;

        }
    }
    .bio{
        margin: 0;
        cursor: default;
        width: 100%;
        font-size: 1.1em;
        font-weight: 600;
        color: white;
        margin-left: 10px;
    }
`



export const UserCard = (props) => {
    return <CardContainer onDoubleClick={props.like}>

        <ImageContainer>
            <img src={props.photo} alt="user"/>
        </ImageContainer>
       
        <DataContainer>
                
            <div className="name">
                <p className="title">{props.name},</p>
                <p className="age">{props.age}</p>
            </div>

            <p className="bio">{props.bio}</p>

        </DataContainer>

        
    </CardContainer>
}