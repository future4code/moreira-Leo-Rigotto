//  LISTA TYPESCRIPT

// ex.1

const hail = (userName: string, birthDate: string): string => {
  const date: string[] = birthDate.split("/")
  return `Ex1: Olá, me chamo ${userName}, nasci no dia ${date[0]} do mês ${date[1]} do ano de ${date[2]}`
}
console.log(hail("Leo", "04/03/1991"))

// ex. 2

const printType = (input: any): void => {
  console.log("Ex2:", typeof input)
}
printType(2)

// ex.3

enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}
type Movie = {
  name: string
  releaseDate: string
  category: GENERO
  rating?: string
}
const pulpFiction: Movie = {
  name: "Pulp Fiction",
  releaseDate: "02/18/1995",
  category: GENERO.DRAMA,
  rating: "4.5 estrelas",
}
console.log("Ex3: ", pulpFiction)

// ex. 4

enum SECTOR {
  MKT = "marketing",
  SALES = "vendas",
  FINANCES = "financeiro",
}
type Employee = {
  nome: string
  salário: number
  setor: SECTOR
  presencial: boolean
}
const employees: Employee[] = [
  { nome: "Marcos", salário: 2500, setor: SECTOR.MKT, presencial: true },
  { nome: "Maria", salário: 1500, setor: SECTOR.SALES, presencial: false },
  { nome: "Salete", salário: 2200, setor: SECTOR.FINANCES, presencial: true },
  { nome: "João", salário: 2800, setor: SECTOR.MKT, presencial: false },
  { nome: "Josué", salário: 5500, setor: SECTOR.FINANCES, presencial: true },
  { nome: "Natalia", salário: 4700, setor: SECTOR.SALES, presencial: true },
  { nome: "Paola", salário: 3500, setor: SECTOR.MKT, presencial: true },
]
const worksInPerson = (arr: Employee[]): Employee[] => {
  return arr.filter((employee) => {
    return employee.presencial === true
  })
}
console.log("Ex4: ", worksInPerson(employees))

// ex. 5

type User = {
  name: string
  email: string
  role: string
}
const users: User[] = [
  { name: "Rogério", email: "roger@email.com", role: "user" },
  { name: "Ademir", email: "ademir@email.com", role: "admin" },
  { name: "Aline", email: "aline@email.com", role: "user" },
  { name: "Jéssica", email: "jessica@email.com", role: "user" },
  { name: "Adilson", email: "adilson@email.com", role: "user" },
  { name: "Carina", email: "carina@email.com", role: "admin" },
]
const isAdminEmail = (arr: User[]): string[] => {
  return arr
    .filter((user) => {
      return user.role === "admin"
    })
    .map((user) => {
      return user.email
    })
}
console.log("Ex5: ", isAdminEmail(users))

//  ex. 6

type Account = {
  cliente: string
  saldoTotal: number
  debitos: number[]
}
const accounts: Account[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
]
const needsCredit = (arr: Account[]): Account[] => {
  const debitSum = arr.map((account) => {
    account.saldoTotal =
      account.saldoTotal - account.debitos.reduce((a, b) => a + b, 0)
    account.debitos = []
    return account
  })
  return debitSum.filter((acc) => {
    return acc.saldoTotal < 0
  })
}

console.log("Ex6: ", needsCredit(accounts))

// ex. 7

type Product = {
  nome: string
  quantidade: number
  valorUnitario: number | string
}

const products: Product[] = [
  { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
  { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
  { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
  { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
  { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
  { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
  { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 },
]

const ajustaPreco = (preco: number): string => {
  const valorAjustado: string = preco.toFixed(2).replace(".", ",")
  return "R$ " + valorAjustado
}

const sortProducts = (arr: Product[]): Product[] => {
  return arr
    .map((product) => {
      product.valorUnitario = ajustaPreco(product.valorUnitario as number)
      return product
    })
    .sort((a, b) => a.quantidade - b.quantidade)
}

console.log("Ex7: ", sortProducts(products))

// ex. 8

console.log("Ex. 8: ")

// ex. 9

const calculateAnagrams = (word: string): number => {
  let anagrams: number = word.length
  for (let i = anagrams; i > 1; i--) {
    anagrams *= i
  }
  return anagrams
}

console.log("Ex. 9: ", calculateAnagrams("computador"))

// ex. 10

const validateCPF = (CPF: string): boolean => {
  let base: string[] = CPF.slice(0, -3).replace(/\./g, "").split("")
  const pseudoDV: string = CPF.slice(12, 14)

  const verify = (): number => {
    return (
      11 -
      (base
        .map((char, i) => {
          return Number(char) * (base.length + 1 - i)
        })
        .reduce((a, b) => a + b) %
        11)
    )
  }

  let dv1: number = verify()

  if (dv1 >= 10) dv1 = 0

  base.push(dv1.toString())

  let dv2: number = verify()

  if (dv2 >= 10) dv2 = 0

  const dvCheck: boolean = dv1.toString() + dv2.toString() === pseudoDV

  return dvCheck
}

console.log("Ex10: ", validateCPF("151.156.321-01"))

// ex. 11

const convertToRoman = (num: number): string => {
  type Char = {
    letra: string
    valor: number
  }

  const dictionary: Char[] = [
    { letra: "M", valor: 1000 },
    { letra: "CM", valor: 900 },
    { letra: "D", valor: 500 },
    { letra: "CD", valor: 400 },
    { letra: "C", valor: 100 },
    { letra: "XC", valor: 90 },
    { letra: "L", valor: 50 },
    { letra: "XL", valor: 40 },
    { letra: "C", valor: 10 },
    { letra: "IX", valor: 9 },
    { letra: "V", valor: 5 },
    { letra: "IV", valor: 4 },
    { letra: "I", valor: 1 },
  ]

  let romanYear: string = ""

  return romanYear
}

console.log("Ex11: ", convertToRoman(2022))
