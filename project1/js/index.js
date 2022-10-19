// Get elements
const inputs = document.querySelector(".inputs")
const incorrect = document.querySelector(".wrong")
const resetbtn = document.querySelector('.resetbttn')
const hint = document.querySelector('.hint span')
const typingInput = document.querySelector('.typing-input')
const guessBtn = document.querySelector('.guessBttn')
let wrong = []
// creating a word bank

const wordBank = ['twix', 'snickers', 'skittles']
//  displaying word from the word bank

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const randomIndex = getRandomInt(wordBank.length)

let word = wordBank[randomIndex]

let box = ""
for (let i = 0; i < word.length; i++) {
    box += '<input type="text" disabled>';
}
inputs.innerHTML = box, word.length;


// // // how many letters remain to be guessed
function pInput(e) {
    let key = typingInput.value
    if (key.match(/^[A-Za-z]+$/)) {
        console.log(key)
        if (word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === key) {
                    inputs.querySelectorAll("input")[i].value = key
                }
            }
        } else {
            // if letter is wrong display and present a body part
            wrong.push(key)
        }
    }
    incorrect.innerText = wrong
}
// // // figure out how many letters are in the word
// // // display that number of underscores





// // //  showing which letters where picked

// // //if letter is right replace dash with the letter


// // // Winning and losing functions
// // //how to determine the winner
// // // how to determine the loser

// keyclick interaction/event listener
resetbtn.addEventListener('click', getRandomInt) // reset button
document.addEventListener('keydown', () => typingInput.focus())
guessBtn.addEventListener("click", pInput)
