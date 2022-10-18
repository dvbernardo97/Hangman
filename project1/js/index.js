// Get elements
const inputs = document.querySelector(".inputs")
const wordGrab = document.getElementById('word')
resetbtn = document.querySelector('.resetbttn')
const hint = document.querySelector('.hint span')
typingInput = document.querySelector('.typing-input')
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
    let key = e.target.value;
    if (key.match(/^[A-Za-z]+$/)) {
        console.log(key);
        if (word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                // showing matched letter in the input value
                if (word[i] === key) {
                    inputs.querySelectorAll("inputs")[i].value = key
                }

            }
            console.log('letter found')
        } else {
            console.log('letter not found')
        }
    }
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
typingInput.addEventListener('input', pInput)
document.addEventListener('click', () => typingInput.focus())