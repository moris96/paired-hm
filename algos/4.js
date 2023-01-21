let alphabet = ''
const letters = ['a', 'b', 'c', 'd']

function concat(letter){
    alphabet += letter
}

letters.forEach((letter) => concat(letter))

console.log(alphabet)


