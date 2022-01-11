import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;

    h4{
        margin-bottom: 6px;
    }

    p{
        margin: 3px;
    }
`

export const CardPequeno = (props) => {
    return (
        <Card>
            <h4>Contato</h4>
            <p>
                {props.email}
            </p>
            <p>
                {props.endereco}
            </p>
        </Card>
    )
}