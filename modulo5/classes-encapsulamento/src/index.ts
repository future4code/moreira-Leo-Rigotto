// 1 a) serve para dizer quais valores serão passados quando formos instanciar essa classe. O chamamos com um método dentro da classe, com os argumentos dentro de parênteses.

// b) 1 vez.

// c) Criando setters e getters - funções que acessam e modificam as propriedades privadas sem precisar conceder acesso às propriedades especificamente.

//  ex2)

class Transaction {
  private description: string
  private value: number
  private date: string

  constructor(description: string, value: number, date: string) {
    this.description = description
    this.value = value
    this.date = date
    this.getTransaction()
  }

  getTransaction() {
    console.log(
      this.description + ",",
      "valor: " + this.value + ",",
      "data " + this.date
    )
  }
}

//

class UserAccount {
  private cpf: string
  private name: string
  private age: number
  private balance: number = 0
  private transactions: Transaction[] = []

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount")
    this.cpf = cpf
    this.name = name
    this.age = age
    this.getUser()
  }

  getUser() {
    console.log(this.cpf, this.name, this.age)
  }
}

class Bank {
  private accounts: UserAccount[]

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts
    this.getAccounts()
  }

  getAccounts() {
    console.log(this.accounts)
  }
}

const leo = new UserAccount("112.112.112.06", "Leo Rigotto", 31)
const fefa = new UserAccount("112.112.112.06", "Fefa", 18)
const transaction = new Transaction("compra na amazon", 200, "04/04/1991")
const nubank = new Bank([leo, fefa])
