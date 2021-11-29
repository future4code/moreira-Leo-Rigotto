// 1:
// 10
// 10 5

// 2:
// 10 10 10

// 3:
// p = horasTrabalhadas
// t = pagamentoDia

let nome
let idade
console.log(typeof nome, typeof idade)

// O console retorna o type das variáveis como "undefined".
// Isso acontece porque elas não guardam nenhuma informação ainda, então não está definido qual type são

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")
console.log(typeof nome, typeof idade)

// Agora o console retorna que as duas varáveis são do tipo string.
// Toda variável que o comando prompt retorna é do tipo string.

console.log("Olá ",nome," você tem ",idade," anos.")

// O console retornou a frase corretamente.

let roupaAzul = prompt("Você está usando roupa azul hoje?")
let roupaVermelha = prompt("Você está usando roupa vermelha hoje?")
let roupaPreta = prompt("Você está usando roupa preta hoje?")

console.log("Você está usando roupa azul hoje? -",roupaAzul)
console.log("Você está usando roupa vermelha hoje? -",roupaVermelha)
console.log("Você está usando roupa preta hoje? -",roupaPreta)

// O console retornou as frases corretamente.

let a = 10
let b = 25

let c = a
a = b
b = c

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b)

// O console retornou corretamente os novos valores de a e b


// DESAFIO:

let primeiroNumero = Number(prompt("Digite o primeiro número"))
let segundoNumero = Number(prompt("Digite o segundo número"))
console.log("O primeiro número somado ao segundo número resulta em", primeiroNumero+segundoNumero)
console.log("O primeiro número multiplicado ao segundo número resulta em", primeiroNumero*segundoNumero)