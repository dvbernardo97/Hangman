// Get elements
const inputs = document.querySelector(".inputs")
const incorrect = document.querySelector(".wrong")
const resetbtn = document.querySelector('.resetbttn')
const hint = document.querySelector('.hint span')
const guessLeft = document.querySelector('.guesses span')
const typingInput = document.querySelector('.typing-input')
const guessBtn = document.querySelector('.guessBttn')
const won = document.querySelector('.won')
const loss = document.querySelector('.loss')
let wrong = []
let guesses = []
let correct = []
const congrats = 'congrats you won'
const again = 'Sorry, try again'
// creating a word bank

const wordBank = ['inuyasha', 'ichigo', 'luffy', 'lelouch', 'goku', 'naruto', 'sauske', 'rukia', 'zoro', 'sanji', 'usopp', 'nami', 'krillin', 'gohan', 'piccolo']
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

function resetText() {
    inputs.innerHTML = box, word.length;
    guessLeft.innerText = guesses
}
resetText()

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
    // Winning and losing functions
    if (correct.length === word.length) {
        won.innerText = congrats
    } else if (guesses < 1) {
        loss.textContent = again
        for (let i = 0; i < word.length; i++) {
            inputs.querySelectorAll("input")[i].value = word[i]
        }
    }
    function start() {
        guessLeft.innerText = guesses
        incorrect.innerText = wrong
    }
    start()

}
function reset() {
    guesses = 8
    resetText()
    wrong = []
    incorrect.innerText = wrong

}



// keyclick interaction/event listener
resetbtn.addEventListener('click', reset) // reset button
document.addEventListener('keydown', () => typingInput.focus())
guessBtn.addEventListener("click", pInput)