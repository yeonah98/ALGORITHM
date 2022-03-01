const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (A, B, C) => {
    let cnt = 1
    let sale = C * cnt
    let total = A + (B * cnt)

    while(sale < total) {
        sale = C * cnt
        total = A + (B * cnt)

        cnt++
    }
    console.log(cnt)
}

rl.on('line', (line) => {
    input = line.split(' ').map(x => +x)

}).on('close', () => {
    let A = input.shift()
    let B = input.shift()
    let C = input.shift()

    solution(A, B, C)

    process.exit()
})