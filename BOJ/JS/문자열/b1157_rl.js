const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (arr) => {
    let alphabet = new Array(26).fill(0)
    for(i in arr) {
        alphabet[arr[i]] += 1
    }
    let max = Math.max(...alphabet)

    if(alphabet.indexOf(max) == alphabet.lastIndexOf(max)) {
        let index = alphabet.indexOf(max)
        console.log(String.fromCharCode(index+65))
    }
    else {
        console.log('?')
    }
}

rl.on('line', (line) => {
    input = line

}).on('close', () => {
    solution(input.split('').map(x => x.toLowerCase().charCodeAt()-97))

    process.exit()
})