// EXERCÍCIOS DE LEITURA

// Exercício 1:

// a. null
// b. null
// c. 8
// d. 3
// e. 3, 19, 5, 6, 7, 8, 9, 10
// f. 9

// Exercício 2:

// SUBI NUM ÔNIBUS EM MIRROCOS


// EXERCÍCIOS DE ESCRITA

// Exercício 1:

// let userName = prompt("Type your new username")
// let userEmail = prompt("Type your email")
// let signInSuccess = `The email ${userEmail} was linked. Welcome, ${userName}!`
// console.log(signInSuccess)

// Exercício 2:

// let favoriteFood = ["Pizza", "Burger", "Arroz com feijão", "Quejo do bar do trevo", "Gnochi"]
// console.log(favoriteFood)
// console.log("Essas são minhas comidas preferidas:",favoriteFood)
// let newFood = prompt("Qual sua comida favorita?")
// favoriteFood[1] = newFood
// console.log(favoriteFood)

// Exercício 3:

// let taskList = []

// let newTask = prompt("Diga a primeira tarefa")
// taskList.push(newTask)
// newTask = prompt("Diga a segunda tarefa")
// taskList.push(newTask)
// newTask = prompt("Diga a terceira tarefa")
// taskList.push(newTask)
// console.log(taskList)

// let taskDone = prompt("De 1 a 3, qual tarefa já foi concluída?") - 1
// taskList.splice(taskDone, 1)
// console.log(taskList)


// DESAFIO

// 1:

let phrase = prompt("Digite uma frase")
let array = phrase.split(' ')
console.log(array)

// 2:

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let indexAbacaxi = frutas.indexOf("Abacaxi")
console.log("A lista de compras tem ", frutas.length, "frutas")
console.log("O abacaxi é o item", indexAbacaxi + 1)