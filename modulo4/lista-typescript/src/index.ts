//  LISTA TYPESCRIPT

// EX.1

const hail = (userName: string, birthDate: string): string => {
  const date: string[] = birthDate.split("/")
  return `EX1: Olá, me chamo ${userName}, nasci no dia ${date[0]} do mês ${date[1]} do ano de ${date[2]}`
}
console.log(hail("Leo", "04/03/1991"))

// EX. 2

const printType = (input: any): void => {
  console.log("EX2:", typeof input)
}
printType(2)

// EX.3

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
console.log("EX3: ", pulpFiction)

// EX. 4

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
console.log("EX4: ", worksInPerson(employees))

// EX. 5

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
console.log("EX5: ", isAdminEmail(users))

//  EX. 6

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

console.log("EX6: ", needsCredit(accounts))

// EX. 7

type Product = {
  nome: string
  quantidade: number
  valueUnitario: number | string
}

const products: Product[] = [
  { nome: "MacMugffin", quantidade: 37, valueUnitario: 51.04 },
  { nome: "Vassoura voadora", quantidade: 56, valueUnitario: 210.0 },
  { nome: "Laço da verdade", quantidade: 32, valueUnitario: 571.5 },
  { nome: "O precioso", quantidade: 1, valueUnitario: 9181.923 },
  { nome: "Caneta de 250 cores", quantidade: 123, valueUnitario: 17 },
  { nome: "Plumbus", quantidade: 13, valueUnitario: 140.44 },
  { nome: "Pokebola", quantidade: 200, valueUnitario: 99.9915 },
]

const ajustaPreco = (preco: number): string => {
  const valueAjustado: string = preco.toFixed(2).replace(".", ",")
  return "R$ " + valueAjustado
}

const sortProducts = (arr: Product[]): Product[] => {
  return arr
    .map((product) => {
      product.valueUnitario = ajustaPreco(product.valueUnitario as number)
      return product
    })
    .sort((a, b) => a.quantidade - b.quantidade)
}

console.log("EX7: ", sortProducts(products))

// EX. 8

console.log("EX. 8: ")

// EX. 9

const calculateAnagrams = (word: string): number => {
  let anagrams: number = word.length
  for (let i = anagrams; i > 1; i--) {
    anagrams *= i
  }
  return anagrams
}

console.log("EX. 9: ", calculateAnagrams("computador"))

// EX. 10

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

console.log("EX10: ", validateCPF("394.171.128-80"))

// EX. 11

const convertToRoman = (num: number): string => {
  type Char = {
    char: string
    value: number
  }

  const dictionary: Char[] = [
    { char: "M", value: 1000 },
    { char: "CM", value: 900 },
    { char: "D", value: 500 },
    { char: "CD", value: 400 },
    { char: "C", value: 100 },
    { char: "XC", value: 90 },
    { char: "L", value: 50 },
    { char: "XL", value: 40 },
    { char: "C", value: 10 },
    { char: "IX", value: 9 },
    { char: "V", value: 5 },
    { char: "IV", value: 4 },
    { char: "I", value: 1 },
  ]

  let romanYear: string = ""

  for (let i = 0; i < dictionary.length; i++) {
    while (num - dictionary[i].value >= 0) {
      romanYear = romanYear + dictionary[i].char
      num -= dictionary[i].value
    }
  }

  return romanYear
}

console.log("EX11: ", convertToRoman(2022))