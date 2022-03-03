const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (A, B, C) => {
    let cnt = 0
    // let sale = C * cnt
    // let total = A + (B * cnt)

    if(B < C) {
        cnt = Math.floor((A/(C-B))) + 1
        console.log(cnt)
    }
    else console.log(-1)
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