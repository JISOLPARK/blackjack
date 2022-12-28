// 1. Create two variables, firstCard and secondCard. 

const { render } = require("express/lib/response")

// Set their values to a random number between 2-11
let cards = []//ordered list of items: array
let sum = 0

let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("card-el")

//creating player objects 
let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// Create a function, getRandomCard(), that always returns the number 5
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomnNumber === 1){
        return 11
    }
    else if (randomNumber > 10){
        return 10
    }
    else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard

    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i ++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum 
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
//messages.pop() remove the last item in the array


