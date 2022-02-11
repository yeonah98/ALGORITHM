const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

const solution = (n) => {
    let result = new Set(n)
    console.log(result.size)
}

rl.on('line', (line) => {
    input.push(line)

}).on('close', () => {
    solution(input.map(x => x%42))
    process.exit()
})