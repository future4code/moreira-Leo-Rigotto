// HERANÇA

// ex1
// a) não. A senha é um atributo privado e não possui um método getter.
// b) uma vez, quando a classe é instanciada.

class User {
  private id: string
  private email: string
  private name: string
  private password: string

  constructor(id: string, email: string, name: string, password: string) {
    console.log("Chamando o construtor da classe User")
    this.id = id
    this.email = email
    this.name = name
    this.password = password
  }

  public getId(): string {
    return this.id
  }

  public getEmail(): string {
    return this.email
  }

  public getName(): string {
    return this.name
  }

  public introduceYourself(): string {
    return `Olá, bom dia! Eu sou ${this.name}`
  }
}

// const leo = new User("1", "leo@leo.com", "Leo Rigotto", "123456")
// console.log("id " + leo.getId(),"nome " + leo.getName(),"email " + leo.getEmail())

// ex2
// a) Uma vez.
// b) Uma vez. Porque ambas as classes mãe e filha foram instanciadas ao instanciar Customer.

class Customer extends User {
  public purchaseTotal: number = 0
  private creditCard: string

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password)
    console.log("Chamando o construtor da classe Customer")
    this.creditCard = creditCard
  }

  public getCreditCard(): string {
    return this.creditCard
  }
}

// const fefa = new Customer(
//   "2",
//   "fefa@picles.com",
//   "Ofelia Picles",
//   "girafa",
//   "1234-1234-1234-1234"
// )

// ex3
// // a)
// console.log(fefa.getId(), fefa.getName(), fefa.getEmail(), fefa.purchaseTotal, fefa.getCreditCard())
// b) não, porque ela continua sendo private na classe mãe, sem existir um método getter para chamá-la

// ex4 e 5
// console.log(fefa.introduceYourself())

// POLIMORFISMO
// ex1
// a) não

export interface Client {
  name: string
  // Refere-se ao nome do cliente

  registrationNumber: number
  // Refere-se ao número de cadastro do cliente na concessionária
  // como se fosse um id

  consumedEnergy: number
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number
  // Retorna o valor da conta em reais
}

const client: Client = {
  name: "Leo",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2
  },
}

// console.log(client.name)
// console.log(client.registrationNumber)
// console.log(client.consumedEnergy)
// console.log(client.calculateBill())

// ex2
// a) cannot create an instance of an abstract class
// b) extendê-la e depois instaciar a classe filha

// ex3
// a) extendê-la e depois instaciar a classe filha
// b) Porque interfaces não possuem valores atrelados a atributos ou declaração de métodos
// c) Porque

export abstract class Place {
  constructor(protected cep: string) {}

  public getCep(): string {
    return this.cep
  }
}

export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep)
  }
  public getDwellersQuantity(): number {
    return this.residentsQuantity
  }
}

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep)
  }
  public getFloorsQuantity(): number {
    return this.floorsQuantity
  }
}

export class Industry extends Place {
  constructor(
    protected machinesQuantity: number,
    // Refere-se à quantidade de máquinas do local

    cep: string
  ) {
    super(cep)
  }
  public getMachinesQuantity(): number {
    return this.machinesQuantity
  }
}

// ex4
// a) eses aqui de baixo

class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    cep: number,
    residentsQuantity: string
  ) {super(cep, residentsQuantity)}

  getCpf() {
    return this.cpf
  }

  calculateBill(): number {
    return this.consumedEnergy * 0.75
  }
}

// ex5

class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep)
  }

  getCnpj() {
    return this.cnpj
  }

  calculateBill(): number {
    return this.consumedEnergy * 0.53
  }
}

// ex6

class IndustrialClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep)
  }

  getCnpj() {
    return this.cnpj
  }

  calculateBill(): number {
    return this.consumedEnergy * 0.53
  }
}