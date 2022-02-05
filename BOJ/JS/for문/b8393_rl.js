const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (n) => {
    let sum = 0
    for(let i = 1; i <= n; i++){
        sum += i
    }
    console.log(sum)
}

rl.on('line', (line) => {
    const input = line.split(' ').map(item => +item)
    solution(input)
}).on('close', () => {
    process.exit()
})