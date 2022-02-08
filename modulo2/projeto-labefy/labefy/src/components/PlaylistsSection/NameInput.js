import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { BASE_URL } from '../../constants/urls';
import { headers } from '../../constants/urls';

const StyledInput = styled.input`
    border: 1px solid lightgray;
    background-color: #333333;
    color: white;
    border-radius: 7px;
    padding: 2px 4px;
    margin: 5px 0 0 5px;
    width: 70%;
`

const StyledForm = styled.form`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    margin: 0;
    padding: 1px;
`

const AddButton = styled.div`
    font-size: 10px;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
    margin: 0 5px 0 0;
    padding: 5px;
    border-radius: 5px;
    :hover{
        background: #333333;
        }
    :active{
        background: #2C2C2C;
        color: lightgray;
        }
`

export default class NameInput extends React.Component{

    state = {
        input: "",
    }

    handleInput = (e) => {
        this.setState({input: e.target.value})
    }

    addPlaylist = (e) => {
        e.preventDefault()
        const body = {name: this.state.input}

        axios.post(BASE_URL, body, headers)
        .then((res) => {
            this.setState({input: ""})
            this.props.update()
        })
        .catch((err) => alert(err.response.data.message))
    }

    render(){
        return(
            <StyledForm type="submit" onSubmit={this.addPlaylist}>
                <StyledInput autoFocus placeholder='Create playlist' value={this.state.input} onChange={this.handleInput}/>
                <AddButton type="submit" onClick={this.addPlaylist}>Add</AddButton>
            </StyledForm>
        )
    }
}