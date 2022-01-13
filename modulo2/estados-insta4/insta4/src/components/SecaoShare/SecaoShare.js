import React, {Component} from 'react'
import styled from 'styled-components'
import Instagram from '../../img/instagram.png'
import Twitter from '../../img/twitter.png'
import Facebook from '../../img/fb.png'

const ShareContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputShare = styled.input`
    width: 100%;
    margin-right: 5px;
`

const SocialShare = styled.img`
    width: 20px;
    margin-left: 5px;
    cursor: pointer;
`

export class SecaoShare extends Component {
	state = {
		Share: '',
	}

    onClickShareInst = () => {
        alert(`Mensagem "${this.state.Share}" enviada para o Instagram!`)
    }
    
    onClickShareFB = () => {
        alert(`Mensagem "${this.state.Share}" enviada para o Facebook!`)
    }

    onClickShareTT = () => {
        alert(`Mensagem "${this.state.Share}" enviada para o Twitter!`)
    }

	onChangeShare = (event) => {
		this.setState({
			Share: event.target.value
		})
	}

	render() {
		return <ShareContainer>
			<InputShare
				placeholder={'Mensagem'}
				value={this.state.Share}
				onChange={this.onChangeShare}
			/>
			<SocialShare alt="Instagram" src={Instagram} onClick={this.onClickShareInst}/>
            <SocialShare alt="Facebook" src={Facebook} onClick={this.onClickShareFB}/>
            <SocialShare alt="Twitter" src={Twitter} onClick={this.onClickShareTT}/>
		</ShareContainer>
	}
}