// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function(a, b) {
      return a-b;
  })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    // let newArray = array.filter((item) => {
    //     return item % 2 === 0
    // })
    // return newArray

    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 2) === 0){
            newArray.push(array[i])
        }
    }
    return newArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let newArray = array.filter((item) => {
        return item % 2 === 0
    }).map((item) => {
        return item ** 2
    })
    return newArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let sortedArray = array.sort(function(a, b) {
        return a - b;
    })
    return sortedArray[sortedArray.length - 1]
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let findsBiggest = (num1, num2) =>{
        if (num1 > num2) return num1
        else return num2
    }
    let findsSmaller = (num1, num2) =>{
        if (num1 < num2) return num1
        else return num2
    }

    let object = {
        maiorNumero: findsBiggest(num1, num2),
        maiorDivisivelPorMenor: (findsBiggest(num1, num2) % findsSmaller(num1, num2)) === 0,
        diferenca: findsBiggest(num1, num2) - findsSmaller(num1, num2),
    }
    return object
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let array = [0]
   while (array.length < n){
       array.push(array.length * 2)
   }
   return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
    }else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC){
        return "Escaleno"
    }else return "Isósceles"
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let sortedArray = array.sort(function(a, b) {
        return a - b;
    })
    let newArray = []
    newArray.push(sortedArray[sortedArray.length-2], sortedArray[1])
    return newArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let anonPerson = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return anonPerson
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let approved = pessoas.filter((person) =>{
        return person.idade >14 && person.idade < 60 && person.altura > 1.5 
    })
    return approved
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let disapproved = pessoas.filter((person) =>{
        return person.idade <= 14 || person.idade >= 60 || person.altura <= 1.5 
    })
    return disapproved
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.forEach((conta) => {
        let debtTotal = 0
        conta.compras.forEach((purchase) => {
            debtTotal = debtTotal + purchase
        })
        conta.saldoTotal = conta.saldoTotal - debtTotal
        conta.compras = []
    })
    
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let consultasAbc = consultas.sort((a, b) => {
        if (a.nome > b.nome){
            return 1
        } else if (a.nome < b.nome){
            return -1
        } else {
            return 0
        }
    })
    return consultasAbc
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    let consultaDia = consultas.sort((a, b) => {
        let [aDia, aMes, aAno] = a.dataDaConsulta.split('/')
        let [bDia, bMes, bAno] = b.dataDaConsulta.split('/')
        return aDia < bDia
    })
    let consultaMes = consultaDia.sort((a, b) => {
        let [aDia, aMes, aAno] = a.dataDaConsulta.split('/')
        let [bDia, bMes, bAno] = b.dataDaConsulta.split('/')
        return aMes > bMes
    })
    return consultaMes
}