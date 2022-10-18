// Get elements
const inputs = document.querySelector(".inputs")
const wordGrab = document.getElementById('word')
const resetbtn = document.querySelector('.resetbttn')
const hint = document.querySelector('.hint span')
const typingInput = document.querySelector('.typing-input')
const guessBtn = document.querySelector('.guessBttn')

// creating a word bank

const wordBank = ['twix', 'snickers', 'skittles']
//  displaying word from the word bank
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const randomIndex = getRandomInt(wordBank.length)

let word = wordBank[randomIndex]

// replace each letter with an underscore

wordGrab.innerHTML = "____ ".repeat(word.length)

// how many letters remain to be guessed
function pInput(e) {
    let key = e.target.value
    console.log(key)
}
// figure out how many letters are in the word
// display that number of underscores

// keyclick interaction/event listener



//  showing which letters where picked
// if letter is wrong display and present a body part
//if letter is right replace dash with the letter


// Winning and losing functions
//how to determine the winner
// how to determine the loser
// reset button
resetbtn.addEventListener('click', wordBank)
document.addEventListener('keydown', () => typingInput.focus())
typingInput.addEventListener("input", pInput)
// guessBtn.addEventListener('click', () => console.log(typingInput.value))
