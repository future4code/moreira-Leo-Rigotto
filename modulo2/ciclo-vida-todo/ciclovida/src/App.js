import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const tarefasCriadas = JSON.parse(localStorage.getItem("tarefas"))
    this.setState({
      tarefas: tarefasCriadas
    })
  };

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  criaTarefa = () => {
    const tarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const copiaTarefas = [...this.state.tarefas, tarefa]
    this.setState({
      tarefas: copiaTarefas
    })
  }

  selectTarefa = (id) => {
    const copiaTarefas = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        } 
        return novaTarefa
      } else return tarefa
    })
    this.setState({tarefas: copiaTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({
      filtro: event.target.value
    })
  }

  apagaTarefa = (id) => {
    const novasTarefas = this.state.tarefas.filter((tarefa) => {
      return tarefa.id !== id
    })
    this.setState({
      tarefas: novasTarefas
    })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <div>
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
                
              </Tarefa>            
              <button onClick={() => this.apagaTarefa(tarefa.id)}>Apagar</button>
            </div>
            )

          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
