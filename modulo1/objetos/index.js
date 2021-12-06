//  EXERCÍCIOS DE INTERPRETAÇÃO

    // EXERCÍCIO 1

        // Matheus Nachtergaele
        // Virginia Cavendish
        // canal: "Globo", horario: "14h"

    // EXERCÍCIO 2

        // a.
        // {nome: "Juca", idade: 3, raca: "SRD"}
        // {nome: "Juba", idade: 3, raca: "SRD"}
        // {nome: "Jubo", idade: 3, raca: "SRD"}

        // b.
        // Ela copia o conteúdo daquele objeto para um novo objeto.

    // EXERCÍCIO 3

        // a.
        // false
        // undefined

        // b.
        // isso aconteceu porque a variável "altura" ainda não foi definida dentro do objeto.



// EXERCÍCIOS DE ESCRITA

    // EXERCÍCIO 1
    // a.

        // const pessoa = {
        //     nome: "Leo",
        //     apelidos: ["Leco, Leozinho, Le"],
        // }

        // function imprimePessoa(objeto) {
        //     console.log(`Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelidos}.`)
        // }

        // imprimePessoa(pessoa)

    // b.
        // const outraPessoa = {
        //     ...pessoa,
        //     apelidos: ["Leozão, Lecão, Larry"]
        // }

        // imprimePessoa(outraPessoa)

    // EXERCÍCIO 2
    // a. 
    //     const pessoa1 = {
    //         nome: "Leo",
    //         idade: 30,
    //         profissao: "Jornalista"
    //     }
    //     const pessoa2 = {
    //         nome: "Letícia",
    //         idade: 29,
    //         profissao: "Analista de Dados"
    //     }
    
    // b.
    //     function arrayPessoa(objeto) {
    //         let pessoa = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
    //         console.log(pessoa)
    //     }
    //     arrayPessoa(pessoa2)


    // EXERCÍCIO 3
    // a.
        // var carrinho = []

    // b.
        // const fruta1 = {
        //     nome: "melancia",
        //     available: true,
        // }
        // const fruta2 = {
        //     nome: "melao",
        //     available: true,
        // }
        // const fruta3 = {
        //     nome: "kiwi",
        //     available: true,
        // }
    
    //c.
        // function colocaCarrinho(fruta) {
        //     carrinho.push(fruta)
        // }
        // colocaCarrinho(fruta1)
        // colocaCarrinho(fruta2)
        // colocaCarrinho(fruta3)

    //d.
        // console.log(carrinho)


// DESAFIOS

    // DESAFIO 1

        // function createMember() {
        //     let nome = prompt("Qual seu nome?")
        //     let idade = prompt(`Qual sua idade, ${nome}?`)
        //     let profissao = prompt(`Ok, ${idade} anos. Agora diga sua profissão, ${nome}.`)

        //     let membro = {
        //         nome,
        //         idade,
        //         profissao,
        //     }

        //     console.log(membro)
        //     console.log(typeof(membro))
        // }
        // createMember()

    // DESAFIO 2
    
        // function launchYear(movie1, movie2) {
        //     let priorRelease = movie1.year < movie2.year
        //     let sameRelease = movie1.year == movie2.year
        //     console.log(`O primeiro filme foi lançado antes do segundo? ${priorRelease}`)
        //     console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${sameRelease}`)
        // }

        // const matrix = {
        //     name: "Matrix",
        //     year: 1999,
        // }
        // const fightClub = {
        //     name: "Fight Club",
        //     year: 1999,
        // }

        // launchYear(fightClub, matrix)

    // DESAFIO 3

        const fruta1 = {
            name: "melancia",
            available: false,
        }
        const fruta2 = {
            name: "melao",
            available: true,
        }
        const fruta3 = {
            name: "kiwi",
            available: true,
        }

        function stockMng(fruta) {
            fruta = {
                ...fruta,
                available: !fruta.available,
            }
            console.log(fruta)
        }

        stockMng(fruta1)