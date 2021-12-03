// EXERCÍCIOS DE INTERPRETAÇÃO


// EXERCÍCIO 1:

// a) vai ser impresso:
// 10
// 50
// b) não apareceria nada no console, apesar do código rodar e
// fazer o cálculo. Poderíamos salvar o resultado em uma variável.


// EXERCÍCIO 2:

// a. essa função transforma a string que lhe foi dada em 
// uma string com letras minúsculas e retorna true se a string
// tiver "cenoura" em algum lugar, ou false se não tiver.
// b. a saída será true nos 3 casos.



// EXERCÍCIOS DE ESCRITA

// EXERCÍCIO 1

// a.

// function print() {
//     console.log("Eu sou Léo, tenho 30 anos, moro em Caraguatatuba e sou estudante")
// }

// b.

// function printMsg(nome, idade, cidade, profissao) {
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
// }

// printMsg("Leo", 30, "Caraguatatuba", "Jornalista")


// EXERCÍCIO 2

// a.

// function soma2(num1, num2) {
//     return num1 + num2
// }

// console.log(soma2(3, 5))

// b.

// function igualMaior(num1, num2) {
//     return num1 >= num2
// }

// console.log(igualMaior(9, 5))

// c.

// function ehPar(num1) {
//     resto = num1 % 2
//     return resto == 0
// }

// console.log(ehPar(971))

// d.

// function msgLengthLowerCase(msg) {
//     console.log(msg.length,msg.toLowerCase())
// }

// msgLengthLowerCase("TESTANDO TUDO será que tá rolando?")


// EXERCÍCIO 3

// function sum(num1, num2) {
//     return num1 + num2
// }

// function sub(num1, num2) {
//     return num1 - num2
// }

// function times(num1, num2) {
//     return num1 * num2
// }

// function div(num1, num2) {
//     return num1 / num2
// }

// const userNum1 = Number(prompt("Insira o primeiro número"))
// const userNum2 = Number(prompt("Insira o segundo número"))

// console.log(`Números inseridos: ${userNum1} e ${userNum2}`)
// console.log(`Soma: ${sum(userNum1,userNum2)}`)
// console.log(`Diferença: ${sub(userNum1,userNum2)}`)
// console.log(`Multiplicação: ${times(userNum1,userNum2)}`)
// console.log(`Divisão: ${div(userNum1,userNum2)}`)


// DESAFIOS

// 1.

let print = (msg) => {
    console.log(msg)
}

let sum = (num1, num2) => {
    calc = num1 + num2
    print(calc)
}

sum(7,4)

// 2.

let pitagoras = (a, b) => {
    hip = Math.sqrt((Math.pow(a,2) + Math.pow(b,2)))
    print(hip)
}

pitagoras(7,23)