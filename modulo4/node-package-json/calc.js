//  Exercicio 2

const operator = process.argv[2]
const firstNum = Number(process.argv[3])
const secondNum = Number(process.argv[4])

let operation = () => {
    switch (operator) {
        case "add":
            return firstNum + secondNum
        case "sub":
            return firstNum - secondNum
        case "mult":
            return firstNum * secondNum
        case "div":
            return firstNum / secondNum
        default:
            return "passe os parametros corretamente"
    }
}

console.log(operation())