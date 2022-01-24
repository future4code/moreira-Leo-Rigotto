import { set } from 'lodash';
import React from 'react';
import styled from 'styled-components';
import { ClosedQuestionInput } from './ClosedQuestionInput';
import { OpenQuentionInput } from './OpenQuestionInput';
import { StageButton } from './StageButton';

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    border: 1px solid lightgray;
    border-radius: 15px;
    padding: 5%;
`

export class FormPage extends React.Component{

    state = {
        questions1: [
            {question: '1. Qual seu nome?',
            placeholder: 'Nome',
            type: 'text',
            options: ''},
            {question: '2. Qual sua idade?',
            placeholder: 'Idade',
            type: 'number',
            options: ''},
            {question: '3. Qual seu email?',
            placeholder: 'email',
            type: 'email',
            options: ''},
            {question: '4. Qual seu grau de escolaridade?',
            placeholder: 'Cursos Complementares',
            options: ['Ensino Médio Incompleto', 'Ensino Médio Completo', 'Ensino Superior Incompleto', 'Ensino Superior Completo'],
            type: 'select'}
        ],
        questions2a: [
            {question: '1. Porque você não terminou um curso de graduação?',
            placeholder: 'Resposta',
            type: 'text'},
            {question: '2. Você fez algum curso complementar?',
            placeholder: 'Cursos Complementares',
            type: 'select'},
        ],
        questions2b: [
            {question: '1. Qual o curso?',
            placeholder: 'Curso',
            type: 'text'},
            {question: '2. Qual a instituição de Ensino?',
            placeholder: 'Instituição',
            type: 'text'},
        ],
        q13: 1,
        etapa: 1,
    }

    onChangeInputs = (i, event) => {
        this.setState({
            [i]: event.target.value
        })
        console.log(this.state.g13)
    }


    genOpenForm1 = this.state.questions1.map((qst, i) => {
        const key = `q1${i}`

        let options = ''

        if (qst.options != '') {
            options = qst.options.map((opt, i) => {
                return <option key={`opt1-${i}`} value={i+1}>{opt}</option>
            })
        }

        if (qst.type != 'select') {
            return <OpenQuentionInput 
        key={key}
        question={qst.question}
        placeholder={qst.placeholder}
        type={qst.type}
        value={this.state[key]}
        onChange={(e) => this.onChangeInputs(key, e)}
        />
        } else {
            return <ClosedQuestionInput
            key={key}
            question={qst.question}
            options={options}
            value={this.state[key]}
            onChange={(e) => this.onChangeInputs(key, e)}/>
}
    })

    genOpenForm2a = this.state.questions2a.map((qst, i) => {
        const key = `q2a${i}`
        if (qst.type != 'select') {
            return <OpenQuentionInput 
        key={key}
        question={qst.question}
        placeholder={qst.placeholder}
        type={qst.type}
        value={this.state[key]}
        onChange={(e) => this.onChangeInputs(key, e)}
        />
        } else {
            return <ClosedQuestionInput
            key={key}
            question={qst.question}/>}
    })

    onClickButton = () => {
        if (this.state.q10 && this.state.q11 && this.state.q12 && this.state.q13) {
            this.setState({
                etapa: 2
            })
            console.log(this.state.etapa)
        }
    }

    render() {

        let title

        if (this.state.etapa == 1) title = <h1>Etapa 1 - Dados Gerais</h1>
        else if (this.state.q13 <= 2 && this.state.etapa == 2) title = <h1>Etapa 2 - Informaçoes Gerais de q13</h1>
        else if (this.state.q13 >= 3 && this.state.etapa == 2) title = <h1>Etapa 2 - Informações de q13 Superior</h1>
        else if (this.state.q13 >= 3 && this.state.etapa == 3) title = <h1>Etapa 3 - Informações adicionais de q13</h1>

        let stage

        if (this.state.etapa == 1) stage = this.genOpenForm1
        else if(this.state.etapa == 2 && this.state.q13 <= 2) stage = this.genOpenForm2a
        else if(this.state.etapa == 2 && this.state.q13 <= 3) stage = this.genOpenForm2b

        return <FormContainer>
            {title}
            {stage}
            <button onClick={this.onClickButton}/>
        </FormContainer>
    }
}