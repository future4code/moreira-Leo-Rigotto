// WELCOME TO THE BLACKJACK CONFIRM GAME

// These are the start variables that store player's cards
let user = buysTwo()
let computer = buysTwo()

// These variables allow us to keep track of player's cards and communicate to the user
let userText = `${user[0].texto} ${user[1].texto}`
let computerText = `${computer[0].texto} ${computer[1].texto}`
let computerTextHidden = `${computer[0].texto}`

function buysTwo(){ // returns an array of two cards with texto and valor
   let player = [comprarCarta(), comprarCarta()]
   if (player[0].texto.includes("A") && player[1].texto.includes("A")){
       player = buysTwo()
   }
   return player
}

function welcome(){ // starts the game and calls other functions
   if(confirm("Boas vindas ao Blackjack!!" + "\n" + "Quer iniciar uma nova rodada?")) {
	   startRound()
   } else alert("O jogo acabou :(")
}

function startRound(){ // displays the starter cards and asks if the player wants to buy another one
   if(confirm(`Boa sorte!` + "\n" + "\n" + `Suas cartas são ${userText}.` + "\n" +  `A carta revelada do computador é ${computerTextHidden}`
   + "\n" + "\n" + "Deseja comprar mais uma carta?")){
      user.push(comprarCarta())
      userText = userText + ` ${user[user.length - 1].texto}`
      askAgain()
   } else computerRound()
}

function askAgain() { // keeps buying cards until the user cancels or passes 21
   if (sumCards(user) >= 21) {
      computerRound()
   } else if(confirm(`Suas cartas são ${userText}.` + "\n" + `A carta revelada do computador é ${computerTextHidden}`
   + "\n" + "\n" + "Deseja comprar mais uma carta?")){
      user.push(comprarCarta())
      userText = userText + ` ${user[user.length - 1].texto}`
      askAgain()
   } else computerRound()
}

function sumCards(player){ // sums the cards players have in hand and returns a number
   let values = player.map((item) => {
      return item.valor
   })
   let sum = values.reduce((a, b) => {
      return a + b
   })
   return sum
}

function computerRound() { // buys cards for the computer until it have
   if (sumCards(computer) <= sumCards(user) && sumCards(computer) < 21){
      computer.push(comprarCarta())
      computerText = computerText + ` ${computer[computer.length -1].texto}`
      computerRound()
   } else {
      checksWinner()
   }
}

function checksWinner(){ // checks who is the winner and display an alert with the match info
   if (sumCards(user) <= 21 && sumCards(user) > sumCards(computer)){
      alert(`Você - Cartas: ${userText} - Pontuação: ${sumCards(user)}.` + "\n" + `Computador: ${computerText} - Pontuação: ${sumCards(computer)}` + "\n" + "Você ganhou!!")
   } else if (sumCards(computer) <= 21 && sumCards(computer) > sumCards(user)){
      alert(`Você - Cartas: ${userText} - Pontuação: ${sumCards(user)}.` + "\n" + `Computador: ${computerText} - Pontuação: ${sumCards(computer)}` + "\n" + "O computador ganhou!!")
   } else if (sumCards(user) <= 21 && sumCards(user) != sumCards(computer)){
      alert(`Você - Cartas: ${userText} - Pontuação: ${sumCards(user)}.` + "\n" + `Computador: ${computerText} - Pontuação: ${sumCards(computer)}` + "\n" + "Você ganhou!!")
   } else if (sumCards(computer) <= 21 && sumCards(computer) != sumCards(user)){
      alert(`Você - Cartas: ${userText} - Pontuação: ${sumCards(user)}.` + "\n" + `Computador: ${computerText} - Pontuação: ${sumCards(computer)}` + "\n" + "O computador ganhou!!")
   } else {
      alert(`Você - Cartas: ${userText} - Pontuação: ${sumCards(user)}.` + "\n" + `Computador: ${computerText} - Pontuação: ${sumCards(computer)}` + "\n" + "É um empate!")
   }
}

welcome() // calls the function to start the game! Let's Go!!