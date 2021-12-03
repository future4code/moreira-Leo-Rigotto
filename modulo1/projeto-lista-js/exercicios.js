// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
    let altura = Number(prompt("Qual a altura?"))
    let largura = Number(prompt("Qual a largura?"))
    let area = altura * largura
    console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt("Qual o ano atual?"))
  let anoNascimento = Number(prompt("Qual seu ano de nascimento?"))
  let idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  peso = Number(prompt("Qual seu peso em kg?"))
  altura = Number(prompt("Qual sua altura em metros?"))
  let imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual seu nome?")
  let idade = prompt("Qual sua idade?")
  let email = prompt("Qual seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Fale uma cor favorita")
  let cor2 = prompt("Fale outra cor favorita")
  let cor3 = prompt("Fale a terceira cor favorita")
  let cores = [cor1, cor2, cor3]
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  string = prompt("Escreva uma palavra").toUpperCase()
  return string
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let quantidadeIngressos = custo / valorIngresso
  return quantidadeIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const check = string1.length === string2.length
  return check
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const ultimoElemento = array[array.length - 1]
  array[array.length - 1] = array[0]
  array[0] = ultimoElemento
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() == string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = prompt("Qual o ano atual?")
  let anoNascimento = prompt("Qual o ano de nascimento?")
  let anoRG = prompt("Quando a carteira de identidade foi emitida?")
  
  let idade = anoAtual - anoNascimento
  let idadeRG = anoAtual - anoRG

  let menos20 = idade <= 20 && idadeRG >= 5
  let entre20e50 = idade > 20 && idade <= 50 && idadeRG >= 10
  let mais50 = idade > 50 && idadeRG >= 15

  let precisaRenovar = menos20 || entre20e50 || mais50

  console.log(precisaRenovar)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  let multi400 = (ano % 400) == 0
  let multi4 = (ano % 4) == 0 && (ano % 100) != 0
  let ehBissexto = multi4 || multi400
  return ehBissexto

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let mais18 = prompt("Você tem mais de 18 anos? sim ou nao") == "sim"
  let ensinoMedio = prompt("Você possui ensino médio completo? sim ou nao") == "sim"
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? sim ou nao") == "sim"

  let podeCursar = mais18 && ensinoMedio && disponibilidade

  console.log(podeCursar)
}