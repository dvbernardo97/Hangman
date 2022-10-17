// creating a word bank
const wordBank = ['twix', 'snickers', 'skittles']
// pickRandom.setAttribute( wordBank[random]) {
//     return pickRandom
// }
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const randomIndex = getRandomInt(wordBank.length)

let word = wordBank[randomIndex]
// keyclick interaction/event listener

// word display
// number of lines for the word
// showing which letters where picked
// set containers for all these options