const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (n) => {
    
    console.log(n)
}


input = []
rl.on('line', (line) => {
    input.push(line)

}).on('close', () => {
    input.shift()
    solution(input)

    process.exit()
})