// EXERCÍCIOS DE INTERPRETAÇÃO
// EXERCÍCIO 1
    // Enquanto a variável valor tiver o valor menor que 5,
    // o código irá rodar, adicionando +2 ao valor de valor.
    // Depois que a variável assumir o valor de 5, o código para de rodar
    // e o console imprime o valor da variavel valor.

// EXERCÍCIO 2
// a.
    // Serão impressos os elementos a partir do número 18.
// b.
    // Ele é suficiente. poderia ser feito assim:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let i of lista) {
//     i = lista.indexOf(i)
//     console.log(i)
//     i++
// }

// EXERCÍCIO 3
// a.
    // *
    // **
    // ***
    // ****


// EXERCÍCIOS DE ESCRITA
// EXERCÍCIO 1

    // let petsNum = Number(prompt("Quantos bichinhos de estimação você tem?"))
    // let pets = []

// a.

    // if (petsNum === 0){
    //     console.log("Que pena! Você pode adotar um pet!")
    // } else {
    //     for (let i = 0; i < petsNum; i++){
    //         let name = prompt("Fale o nome de um deles")
    //         pets.push(name)
    //     }
    // }
    // console.log(pets)


// EXERCÍCIO 2

    // let numList = [93, 18, 34, 80, 67, 3, 71]

// a.

    // function printValues(array){
    //     for (let i = 0; i < array.length; i++){
    //     console.log(array[i])
    //     }
    // }

// b.

    // function printDiv10(array){
    //     for (let i = 0; i < array.length; i++){
    //     console.log(array[i]/10)
    //     }
    // }

// c.

    // function printEven(array){
    //     let evenList = []
    //     for (let i = 0; i < array.length; i++){
    //         if ((array[i] % 2) === 0){
    //             evenList.push(array[i])
    //         }
    //     }
    //     console.log(evenList)
    // }

// d.

    // function printPhrase(array){
    //     numPhraseList = []
    //     for (let i = 0; i < array.length; i++){
    //         numPhraseList.push(`O elemento do índex ${i} é: ${array[i]}`)
    //     }
    //     console.log(numPhraseList)
    // }

// e.

    // function printTopBottom(array){
    //     let topNum = 0
    //     let bottomNum = 200
    //     for (let i = 0; i < array.length; i++){
    //         if (topNum < array[i]){
    //             topNum = array[i]
    //         }
    //     }
    //     for (let i = 0; i < array.length; i++){
    //         if (bottomNum > array[i]){
    //             bottomNum = array[i]
    //         }
    //     }
    //     console.log(`O maior número da lista é ${topNum} e o menor número é ${bottomNum}.`)
    // }


// DESAFIO 1

    // let chosenNum = Number(prompt("Vamos jogar! Digite um número."))
    // let pickedNum = 0

    // console.log("Vamos jogar!!")

    // for (let i = 0; chosenNum !== pickedNum; i++){
    //     pickedNum = Number(prompt("Chute um número."))
    //     console.log(`O número chutado foi ${pickedNum}`)
    //     if (pickedNum < chosenNum){
    //         console.log("Errou, o número escolhido é maior.")
    //     } else if (pickedNum > chosenNum){
    //         console.log("Errou, o número escolhido é menor.")
    //     } else {
    //         console.log("Acertou!!")
    //         console.log(`O número de tentativas foi: ${i+1}`)
    //     }
    // }

// DESAFIO 2

    // let chosenNum = Math.floor((Math.random() * 100) + 1)
    // let pickedNum = 0

    // console.log("Vamos jogar!!")

    // for (let i = 0; chosenNum !== pickedNum; i++){
    //     pickedNum = Number(prompt("Chute um número."))
    //     console.log(`O número chutado foi ${pickedNum}`)
    //     if (pickedNum < chosenNum){
    //         console.log("Errou, o número escolhido é maior.")
    //     } else if (pickedNum > chosenNum){
    //         console.log("Errou, o número escolhido é menor.")
    //     } else {
    //         console.log("Acertou!!")
    //         console.log(`O número de tentativas foi: ${i+1}`)
    //     }
    // }