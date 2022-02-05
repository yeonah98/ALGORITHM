const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (N) => {
    let answer = ''
    for(let i=N; i>0; i--){
        answer += i + '\n'
    }
    console.log(answer)
}

rl.on('line', (line) => {
    input = +line
}).on('close', () => {
    solution(input)
    process.exit()
})