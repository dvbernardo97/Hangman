// creating a word bank
const wordBank = ['twix', 'snickers', 'skittles']

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const randomIndex = getRandomInt(wordBank.length)

let word = wordBank[randomIndex]

// replace each letter with an underscore
    // figure out how many letters are in the word
    // display that number of underscores

// keyclick interaction/event listener
    //  showing which letters where picked
    // if letter is wrong display and present a body part
    //if letter is right replace dash with the letter