import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtido] = useState(0)
  const [comentando, setComentando] = useState(false)
  const [comentarios, setComentarios] = useState([])



  const onClickCurtida = () => {
    if(curtido){
      setCurtido(!curtido)
      setNumeroCurtido(numeroCurtidas - 1)
    } else {
      setCurtido(!curtido)
      setNumeroCurtido(numeroCurtidas + 1)
    }
  }

  const iconeCurtida = (curtido ? iconeCoracaoPreto : iconeCoracaoBranco)


  const onClickComentario = () => {
    setComentando(!comentando)
  }

  const enviarComentario = (comentario) => {
    setComentarios([...comentarios, comentario])
    setComentando(false)
  }

  const caixaDeComentario = (comentando ? <SecaoComentario comentarios={comentarios} enviarComentario={enviarComentario}/> : <></>)

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={comentarios.length}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post