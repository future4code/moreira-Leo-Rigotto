// a)
// const minhaString: string = 9

// b)
const meuNumero: number | string = "Oi"

// c) e d)

enum cores {
    VERDE = "verde",
    AZUL = "azul",
    AMARELO = "amarelo",
    VERMELHO = "vermelho",
    ROXO = "roxo",
    LARANJA = "laranja",
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: cores
}

const leo: Pessoa = {
    nome: "Leo",
    idade: 31,
    corFavorita: cores.VERDE
}

const leticia: Pessoa = {
    nome: "Letícia",
    idade: 29,
    corFavorita: cores.AZUL
}

const fefa: Pessoa = {
    nome: "FEFA",
    idade: 20,
    corFavorita: cores.LARANJA
}