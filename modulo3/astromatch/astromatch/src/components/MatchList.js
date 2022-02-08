import { useState } from "react"
import styled from "styled-components"
import axios from "axios"

const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
`

const User = styled.li`
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 10px;
    width: 95%;
    margin: 10px 0;
    padding: 0;
    .photo{
        border-radius: 50px;
        margin: 5px 10px;
        width: 60px;
        height: 60px;
        overflow: hidden;
        img{
            width: 200%;
            transform: translateX(-20%);
        }
    }
`

export const MatchList = () => {

    const [userList, setUserList] = useState([])

    const getMatches = () => {

    }


    return <ListContainer>

        <User>

            <div className="photo"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg/2560px-TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg" alt="user"/>
            </div>

            <p>Timnit</p>
        </User>


         <User>

            <div className="photo"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg/2560px-TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg" alt="user"/>
            </div>

            <p>Timnit</p>
        </User>
        

         <User>

            <div className="photo"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg/2560px-TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg" alt="user"/>
            </div>

            <p>Timnit</p>
        </User>

        <User>

            <div className="photo"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg/2560px-TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg" alt="user"/>
            </div>

            <p>Timnit</p>
        </User>
        <User>

            <div className="photo"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg/2560px-TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg" alt="user"/>
            </div>

            <p>Timnit</p>
        </User>
        <User>

            <div className="photo"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg/2560px-TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg" alt="user"/>
            </div>

            <p>Timnit</p>
        </User>
        <User>

            <div className="photo"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg/2560px-TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg" alt="user"/>
            </div>

            <p>Timnit</p>
        </User>
        <User>

            <div className="photo"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg/2560px-TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg" alt="user"/>
            </div>

            <p>Timnit</p>
        </User>
        <User>

            <div className="photo"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg/2560px-TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg" alt="user"/>
            </div>

            <p>Timnit</p>
        </User>
        <User>

            <div className="photo"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg/2560px-TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg" alt="user"/>
            </div>

            <p>Timnit</p>
        </User>
        <User>

            <div className="photo"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg/2560px-TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg" alt="user"/>
            </div>

            <p>Timnit</p>
        </User>
        <User>

            <div className="photo"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg/2560px-TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg" alt="user"/>
            </div>

            <p>Timnit</p>
        </User>
        <User>

            <div className="photo"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg/2560px-TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg" alt="user"/>
            </div>

            <p>Timnit</p>
        </User>
        <User>

            <div className="photo"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg/2560px-TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg" alt="user"/>
            </div>

            <p>Timnit</p>
        </User>
        <User>

            <div className="photo"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg/2560px-TechCrunch_Disrupt_San_Francisco_2018_-_day_3_%2830671211838%29.jpg" alt="user"/>
            </div>

            <p>Timnit</p>
        </User>

        
    </ListContainer>
}