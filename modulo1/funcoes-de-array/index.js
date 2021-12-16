// EXERCÍCIOS DE INTERPRETAÇÃO
// EXERCÍCIO 1

    // Será impresso :
    // { nome: "Amanda Rangel", apelido: "Mandi" }, 0,
    // { nome: "Amanda Rangel", apelido: "Mandi" },
    // { nome: "Laís Petra", apelido: "Laura" },
    // { nome: "Letícia Chijo", apelido: "Chijo" },
    // { nome: "Laís Petra", apelido: "Laura" }, 1,
    // { nome: "Amanda Rangel", apelido: "Mandi" },
    // { nome: "Laís Petra", apelido: "Laura" },
    // { nome: "Letícia Chijo", apelido: "Chijo" },
    // { nome: "Letícia Chijo", apelido: "Chijo" } 2,
    // { nome: "Amanda Rangel", apelido: "Mandi" },
    // { nome: "Laís Petra", apelido: "Laura" },
    // { nome: "Letícia Chijo", apelido: "Chijo" }

// EXERCÍCIO 2

    // Será impresso:
    // ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

// EXERCÍCIO 3

    // Será impresso:
    // [{ nome: "Amanda Rangel", apelido: "Mandi" },
    // { nome: "Laís Petra", apelido: "Laura" }]


// EXERCÍCIOS DE ESCRITA
// EXERCÍCIO 1

    // const pets = [
    //     { nome: "Lupin", raca: "Salsicha"},
    //     { nome: "Polly", raca: "Lhasa Apso"},
    //     { nome: "Madame", raca: "Poodle"},
    //     { nome: "Quentinho", raca: "Salsicha"},
    //     { nome: "Fluffy", raca: "Poodle"},
    //     { nome: "Caramelo", raca: "Vira-lata"},
    // ]

//  a.

    // const petsName = pets.map((item) => {
    //     return item.nome
    // })

// b.

    // const salsicha = pets.filter((item) => {
    //     return item.raca === "Salsicha"
    // })

// c.

    // const poodleDiscMsg = pets.filter((item) => {
    //     return item.raca === "Poodle"
    // }).map((item) => {
    //     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
    // })


// EXERCÍCIO 2

    const products = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]

// a.

    // const productNames = products.map((item) => {
    //     return item.nome
    // })

// b.

    const fiveOffProducts = products.map((item) => {
        return {
            nome: item.nome,
            preco: Number((item.preco - (item.preco * 0.05)).toFixed(2))
        }
    })
    console.log(fiveOffProducts)

// c.

    // const beverages = products.filter((item) => {
    //     return item.categoria === "Bebidas"
    // })

// d. e.

    // const ypeDiscMsg = products.filter((item) => {
    //     return item.nome.includes("Ypê")
    // }).map((item) => {
    //     return `Compre ${item.nome} por ${item.preco}!!`
    // })


// DESAFIO

    const pokemons = [
        { nome: "Bulbasaur", tipo: "grama" },
        { nome: "Bellsprout", tipo: "grama" },
        { nome: "Charmander", tipo: "fogo" },
        { nome: "Vulpix", tipo: "fogo" },
        { nome: "Squirtle", tipo: "água" },
        { nome: "Psyduck", tipo: "água" },
    ]

// a.

    const abcPokemons = pokemons.map((item) => {
        return item.nome
    })
    abcPokemons.sort()

// b.

    const types = pokemons.map((item) => {
        return item.tipo
    })
    const typesUnique = [...new Set(types)]
    // console.log(typesUnique)