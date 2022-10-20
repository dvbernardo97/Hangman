// Get elements
const inputs = document.querySelector(".inputs")
const incorrect = document.querySelector(".wrong")
const resetbtn = document.querySelector('.resetbttn')
const hint = document.querySelector('.hint span')
const guessLeft = document.querySelector('.guesses span')
const typingInput = document.querySelector('.typing-input')
const guessBtn = document.querySelector('.guessBttn')
let wrong = []
let guesses = []
let correct = []
// creating a word bank

const wordBank = ['twix', 'snickers', 'skittles']
//  displaying word from the word bank

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const randomIndex = getRandomInt(wordBank.length)

let word = wordBank[randomIndex]
guesses = 8;
// figure out how many letters are in the word
let box = ""
for (let i = 0; i < word.length; i++) {
    box += '<input type="text" disabled>';
}
inputs.innerHTML = box, word.length;
guessLeft.innerText = guesses

// how many letters remain to be guessed
function pInput(e) {
    let key = typingInput.value
    if (key.match(/^[A-Za-z]+$/)) {
        console.log(key)
        if (word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === key) {
                    inputs.querySelectorAll("input")[i].value = key
                    correct.push(key)
                }
            }
        } else {
            guesses--;
            // if letter is wrong display and present a body part
            wrong.push(key)


        }
    }
    guessLeft.innerText = guesses
    incorrect.innerText = wrong
    // Winning and losing functions
    if (correct.length === word.length) {
        Window.open("Congratulations you found the word!!")
    } else if (guesses < 1) {
        alert("Game Over! No more guesses")
        for (let i = 0; i < word.length; i++) {
            inputs.querySelectorAll("input")[i].value = word[i]
        }
    }
}


//how to determine the winner
// how to determine the loser

// keyclick interaction/event listener
resetbtn.addEventListener('click', getRandomInt) // reset button
document.addEventListener('keydown', () => typingInput.focus())
guessBtn.addEventListener("click", pInput)