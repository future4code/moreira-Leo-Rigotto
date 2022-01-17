import React from 'react'
import styled from 'styled-components'
import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSavedBranco from '../../img/save-white.png'
import iconeSavedPreto from '../../img/save.png'
import iconShare from '../../img/share.png'
import {SecaoShare} from '../SecaoShare/SecaoShare'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

const SavedPostIcon = styled.img`
  width: 20px;
  cursor: pointer;
`

const ShareIcon = styled.img`
  width: 20px;
  cursor: pointer;
  margin-right: 10px;
`

const TwoIconFooter = styled.div`
  display: flex;
  align-items: center;
`

const ComentariosEnviados = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h5{
    margin: 0;
    padding: 5px;
  }
  p{
    border-top: 1px solid lightgray;
    padding: 5px;
    margin: 0;
    word-wrap: break-word
  }
`

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    saved: false,
    compartilhando: false,
    inputComentarios: '',
    comment: '',
  }

  contaCurtida = () => {
    if (this.state.curtido == false){
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido
    })
    this.contaCurtida()
  }

  onClickSaved = () => {
    this.setState({
      saved: !this.state.saved
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onChangeComentario = (event) => {
		this.setState({
			inputComentarios: event.target.value
		})
	}

  aoEnviarComentario = () => {
    this.setState({
      comment: [...this.state.comment, <p>{this.state.inputComentarios}</p>],
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
      inputComentarios: ''
    })
  }

  onClickShare = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  aoCompartilhar = () => {
    this.setState({
      compartilhando: false,
    })
  }

  render() {
    let iconeCurtida
    
    let componenteComentariosEnviados

    if (this.state.comment !== '') {
      componenteComentariosEnviados = <ComentariosEnviados>
        <h5>Comentários:</h5>
        {this.state.comment}
        </ComentariosEnviados>
    }

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconSaved

    if(this.state.saved) {
      iconSaved = iconeSavedPreto
    } else {
      iconSaved = iconeSavedBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <CommentContainer>
      <InputComentario
        placeholder={'Comentário'}
        value={this.state.inputComentarios}
        onChange={this.onChangeComentario}
        onSubmit={this.aoEnviarComentario}
      />
      <button onClick={this.aoEnviarComentario}>Enviar</button>
      </CommentContainer>}

    let componenteShare

    if(this.state.compartilhando) {
      componenteShare = <SecaoShare aoEnviar={this.aoCompartilhar}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <TwoIconFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />
          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </TwoIconFooter>
      
        <TwoIconFooter>
          <ShareIcon
          alt={'Icone'} 
          src={iconShare} 
          onClick={this.onClickShare}
          />
          <SavedPostIcon 
            alt={'Icone'} 
            src={iconSaved} 
            onClick={this.onClickSaved}
            />
        </TwoIconFooter>
      </PostFooter>
      {componenteComentariosEnviados}
      {componenteShare}
      {componenteComentario}
    </PostContainer>
  }
}

export default Post