import React from 'react'
import styled from 'styled-components'
import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
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

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    saved: false,
    compartilhando: false,
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

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
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
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    if(this.state.compartilhando) {
      componenteComentario = <SecaoShare aoEnviar={this.aoCompartilhar}/>
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
      {componenteComentario}
    </PostContainer>
  }
}

export default Post