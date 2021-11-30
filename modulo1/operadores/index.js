// EXERCÍCIOS DE LEITURA:

// Exercício 1:
// a. False
// b. False
// c .True
// d. boolean

// Exercício 2:
// O programa está somando duas strings, ao invés do objetivo de somar dois números.
// No caso do código escrito, o console retornará uma string concatenando com uma variável depois da outra.
// Ex. primeiroNumero = 1 ; segundoNumero = 12 ; console.log(soma): 112

// Exercício 3:
// Para resolver o problema seria necessário usar a função Number() para alterar o type das variáveis.


// EXERCÍCIOS DE ESCRITA:

// Exercício 1:

// const userAge = Number(prompt("Qual sua idade"))
// const friendAge = Number(prompt("Qual a idade da sua amiga ou amigo?"))

// let ageDif = userAge - friendAge

// console.log("Sua idade é maior do que a do seu melhor amigo?", userAge > friendAge)
// console.log("A diferença das idades é de ",ageDif," anos.")

// Exercício 2:

// const even = prompt("Escreva um número par.")
// console.log(even % 2)

// O resto é sempre 0.
// Se o usuário escreve um número ímpar, o resto é sempre 1.
// Essa é uma boa forma de sabermos se o número digitado é par ou impar.

// Exercício 3:

// const yearsAge = prompt("Qual a sua idade?")

// let monthsAge = yearsAge * 12
// let daysAge = monthsAge * 30
// let hoursAge = daysAge * 24

// console.log("Sua idade em meses é: ", monthsAge)
// console.log("Sua idade em dias é: ", daysAge)
// console.log("Sua idade em horas é: ", hoursAge)

// Exercício 4:

// const num1 = Number(prompt("Digite um número."))
// const num2 = Number(prompt("Digite outro número."))

// let primeiroMaior = num1 > num2
// let primeiroIgual = num1 === num2
// let resto1 = num1 % num2
// let resto2 = num2 % num1

// console.log("O primeiro numero é maior que segundo?",primeiroMaior)
// console.log("O primeiro numero é igual ao segundo?",primeiroIgual)
// console.log("O primeiro numero é divisível pelo segundo?",resto1 === 0)
// console.log("O segundo numero é divisível pelo primeiro?",resto2 === 0)


// DESAFIO 1:

// var fahrenheitDegrees = 77
// var kelvinDegrees = (fahrenheitDegrees - 32)*(5/9) + 273.15
// console.log("A temperatura de 77°F é",kelvinDegrees,"K")

// var celsiusDegrees = 80
// fahrenheitDegrees = celsiusDegrees*(9/5) + 32
// console.log("A temperatura de 80°C é",fahrenheitDegrees,"°F")

// var celsiusDegrees = 30
// fahrenheitDegrees = celsiusDegrees*(9/5) + 32
// var kelvinDegrees = (fahrenheitDegrees - 32)*(5/9) + 273.15
// console.log("A temperatura de 30°C é",kelvinDegrees,"K ou ",fahrenheitDegrees,"°F.")

// var celsiusDegrees = Number(prompt("Digite a temperatura em Celsius"))
// fahrenheitDegrees = celsiusDegrees*(9/5) + 32
// var kelvinDegrees = (fahrenheitDegrees - 32)*(5/9) + 273.15
// console.log("A temperatura de",celsiusDegrees,"°C é",kelvinDegrees,"K ou ",fahrenheitDegrees,"°F.")


// DESAFIO 2:

// const energy = 280
// const price = 0.05
// const discount = 0.15

// var january = energy * price
// console.log("Sua conta de luz de janeiro é de R$",january)

// var januaryTotal = january - (january * discount)
// console.log("Sua conte de luz de janeiro com desconto é de R$",januaryTotal)

// DESAFIO 3:

let lb = 20
let oz = 10.5
let mi = 100
let ft = 50
let gal = 103.56
let cup = 450

var lb2Kg = lb / 2.205
console.log(lb,"lb equivalem a ",lb2Kg,"kg.")

var oz2Kg = oz / 35.274
console.log(oz,"oz equivalem a ",oz2Kg,"kg.")

var mi2M = mi * 1069.34
console.log(mi,"mi equivalem a ",mi2M,"m.")

var ft2M = ft / 3.281
console.log(ft,"ft equivalem a ",ft2M,"m.")

var gal2L = gal * 3.785
console.log(gal,"gal equivalem a ",gal2L,"l.")

var cup2L = cup / 4.227
console.log(cup,"xic equivalem a ",cup2L,"l.")

ft = Number(prompt("Digite a unidade em pés."))
var ft2M = ft / 3.281
console.log(ft,"ft equivalem a ",ft2M,"m.")