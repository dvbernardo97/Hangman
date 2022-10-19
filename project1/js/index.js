// Get elements
const inputs = document.querySelector(".inputs")
// const wordGrab = document.getElementById('word')
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

let box = ""
for (let i = 0; i < word.length; i++) {
    box += '<input type="text" disabled>';
}
inputs.innerHTML = box, word.length;

// random();

// // replace each letter with an underscore

// inputs.innerText = "__ ".repeat(word.length, box)

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
            console.log("letter not found")
        }
    }
}
// // // figure out how many letters are in the word
// // // display that number of underscores

// // // keyclick interaction/event listener



// // //  showing which letters where picked
// // // if letter is wrong display and present a body part
// // //if letter is right replace dash with the letter


// // // Winning and losing functions
// // //how to determine the winner
// // // how to determine the loser
// // // reset button
resetbtn.addEventListener('click', getRandomInt)
document.addEventListener('keydown', () => typingInput.focus())
guessBtn.addEventListener("click", pInput)
