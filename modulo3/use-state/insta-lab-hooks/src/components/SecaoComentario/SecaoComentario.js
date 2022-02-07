import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
	flex-direction: column;
    padding: 5px;
`

const InputComment = styled.input `
    margin: 5px;
`

const SecaoComentario = (props) => {

	const [comentario, setComentario] = useState("")


	const onChangeComentario = (event) => {
		setComentario(event.target.value)
	}

	const showComments = props.comentarios.map((comentario) => {
		return <p>{comentario}</p>
	})

	return (
		<CommentContainer>

			{showComments}

			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={comentario}
				onChange={onChangeComentario}
			/>
			<button onClick={() => { props.enviarComentario(comentario) }} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario