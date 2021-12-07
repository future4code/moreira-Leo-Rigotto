// EXERCÍCIOS DE INTERPRETAÇÃO
    // EXERCÍCIO 1
    // a.
        // Esse código testa se o resto da divisão por dois do número inserido é igual a 0
    // b.
        // Para números pares.
    // c.
        // Para números ímpares.

    // EXERCÍCIO 2
    // a.
        // Serve para dizer qual o preço da fruta escolhida.
    // b.
        // "O preço da fruta Maçã é R$ 2.25"
    // c.
        // "O preço da fruta Pêra é R$ 5,5" , "O preço da fruta Pêra é R$ 5"

    // EXERCÍCIO 3
    // a.
        // Está pedindo à pessoa usuária que digite um número, e guardando esse número em uma variável.
    // b.
        // A mensagem será: "Esse número passou no teste", e um erro dizendo que não existe a variável mensagem.
        // Se o número fosse -10, o console retornaria um erro dizendo que não existe a variável mensagem.
    // c.
        // Sim. A variável mensagem está declarada apenas dentro do bloco if(numero > 0).
        // Para que não houvesse erro, o bloco if deveria retornar a variável com return, ou imprimir no console diretamente.
        // A variável mensagem existe apenas no escopo local daquele bloco.


// EXERCÍCIOS DE ESCRITA
    // EXERCÍCIO 1
    // a. e b.
        // let age = Number(prompt("Qual sua idade?"))
    // c.
        // if(age >= 18) {
        //     console.log("Você pode dirigir!")
        // } else {
        //     console.log("Você não pode dirigir")
        // }
        
    // EXERCÍCIO 2
        // let shift = prompt("Digite M se estuda de manhã, V para de tarde ou N para de noite.")
        // if(shift === "M"){
        //     console.log("Bom dia!")
        // } else if(shift === "V"){
        //     console.log("Boa tarde!")
        // } else if(shift === "N"){
        //     console.log("Boa noite!")
        // } else {
        //     console.log("Recarregue a página e tente de novo.")
        // }

    // EXERCÍCIO 3
        // let shift = prompt("Digite M se estuda de manhã, V para de tarde ou N para de noite.")
        // switch (shift) {
        //     case "M":
        //         console.log("Bom dia!")
        //         break;
        //     case "V":
        //         console.log("Boa tarde!")
        //         break;
        //     case "N":
        //         console.log("Boa noite!")
        //         break;
        //     default:
        //         console.log("Recarregue a página e tente de novo.")
        //         break;
        // }
    
    // EXERCÍCIO 4
        // let genre = prompt("Qual o gênero do filme?")
        // let price = prompt("Quanto custa o ingresso?")

        // if (genre === "Fantasia" && price < 15){
        //     console.log("Bom filme!")
        // } else {
        //     console.log("Escolha outro filme :(")
        // }

// DESAFIOS
    // DESAFIO 1
        // let genre = prompt("Qual o gênero do filme?")
        // let price = prompt("Quanto custa o ingresso?")

        // if (genre === "Fantasia" && price < 15){
        //     let snacks = prompt("Qual lanchinho vai comprar?")
        //     console.log("Bom filme!")
        //     console.log(`Aproveite a/o ${snacks}`)
        // } else {
        //     console.log("Escolha outro filme :(")
        // }

    // DESAFIO 2
        const ticket1 = {
            name: prompt("Qual seu nome completo?"),
            gameType: prompt("Qual o tipo de jogo? IN: internacional; DO: doméstico").toUpperCase(),
            gameStage: prompt("Qual a etapa do jogo? SF: semi-final; DT: decisão de terceiro-lugar; FI: final").toUpperCase(),
            cat: Number(prompt("Qual a categoria? 1,2,3 ou 4")),
            quantity: Number(prompt("Quantos ingressos quer comprar?")),
        }
        

        function calcTicket(cat, stage, type){
            let price

            if (cat === 1 && stage === "SF"){
                price = 1320
            } else if (cat === 1 && stage === "DT"){
                price = 660
            } else if (cat === 1 && stage === "FI"){
                price = 1980
            } else if (cat === 2 && stage === "SF"){
                price = 880
            } else if (cat === 2 && stage === "DT"){
                price = 440
            } else if (cat === 2 && stage === "FI"){
                price = 1320
            } else if (cat === 3 && stage === "SF"){
                price = 550
            } else if (cat === 3 && stage === "DT"){
                price = 330
            } else if (cat === 3 && stage === "FI"){
                price = 880
            } else if (cat === 4 && stage === "SF"){
                price = 220
            } else if (cat === 4 && stage === "DT"){
                price = 170
            } else if (cat === 4 && stage === "FI"){
                price = 330
            } 

            if (type === "IN"){
                price = price * 4.1
                return price
            } else {
                return price
            }
        }


        function checkout(ticket){
            price = calcTicket(ticket.cat, ticket.gameStage, ticket.gameType)

            let totalPrice = price * ticket.quantity
            
            switch (ticket.gameType) {
                case "IN":
                    ticket.gameType = "Internacional"
                    break;
                case "DO":
                    ticket.gameType = "Nacional"
                    break;
            }
            
            switch (ticket.gameStage) {
                case "SF":
                    ticket.gameStage = "Semi-final"
                    break;
                case "DT":
                    ticket.gameStage = "Decisão de Terceiro Lugar"
                    break;
                case "FI":
                    ticket.gameStage = "Final"
            }

            console.log("---Dados da Compra---")
            console.log(`Nome do cliente: ${ticket.name}`)
            console.log(`Tipo do jogo: ${ticket.gameType}`)
            console.log(`Etapa do jogo: ${ticket.gameStage}`)
            console.log(`Categoria: ${ticket.cat}`)
            console.log(`Quantidade de Ingressos: ${ticket.quantity} ingressos`)
            console.log("---Valores---")
            console.log(`Valor do ingresso: R$${price}`)
            console.log(`Valor total: R$${totalPrice}`)
        }

        checkout(ticket1)