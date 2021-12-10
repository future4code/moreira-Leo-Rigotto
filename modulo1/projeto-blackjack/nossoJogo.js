// WELCOME TO THE BLACKJACK CONSOLE GAME

function startRound(){
   console.log(`Usuário - cartas: ${userText} - ${userSum}`)
   console.log(`Computador - cartas: ${computerText} - ${computerSum}`)
   if (userSum <= 21 && userSum > computerSum){
      console.log(`O usuário ganhou!`)
   } else if (computerSum <= 21 && computerSum > userSum){
      console.log(`O computador ganhou!`)
   } else console.log(`Empate!`)
}

let user = [comprarCarta(), comprarCarta()]
let computer = [comprarCarta(), comprarCarta()]

let userText = `${user[0].texto} ${user[1].texto}`
let userSum = user[0].valor + user[1].valor
let computerText = `${computer[0].texto} ${computer[1].texto}`
let computerSum = computer[0].valor + computer[1].valor

console.log("Boas vindas ao jogo de Blackjack!")
if(confirm("Quer iniciar uma nova rodada?")) {
	startRound()
} else console.log("O jogo acabou :(")
