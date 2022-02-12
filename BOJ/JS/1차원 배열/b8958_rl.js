const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (input) => {

}

let input = []

rl.on('line', (line) => {
    input.push(line)

}).on('close', () => {
    let num = input.shift()

    solution(input)

    console.log(num)

    process.exit()
})