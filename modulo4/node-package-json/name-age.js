// Exercicio 1
// a) utilizamos o array process.argv, a partir do índice 2

// b) 

const userName = process.argv[2]
const age = process.argv[3]

console.log(`Olá, ${userName}! Você tem ${age} anos.`)

// c)

const ageInSevenYears = Number(age) + 7

console.log(`Olá, ${userName}! Você tem ${age} anos. Em sete anos você terá ${ageInSevenYears}`)