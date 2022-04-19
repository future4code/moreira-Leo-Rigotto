export type Account = {
  id: number
  name: string
  CPF: string
  birthDate: string
  total: number
  extract: Transaction[]
}

export type Transaction = {
  value: number
  date: string
  description: string
}

export const accounts: Account[] = [
  {
    id: 1,
    name: "Leo",
    CPF: "112.52.706-08",
    birthDate: "04/03/1991",
    total: 1000,
    extract: [
      {
        value: 100,
        date: "22/03/2022",
        description: "Drinks",
      },
      {
        value: 300,
        date: "05/03/2022",
        description: "Teclado mecanico",
      },
    ],
  },
]
