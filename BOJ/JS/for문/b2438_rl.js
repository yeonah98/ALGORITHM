const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (N) => {
    for(let i=0; i<N; i++){
        for(let j=0; j<=i; j++) {
            process.stdout.write('*')
        }
        console.log()
    }
}

rl.on('line', (line) => {
    input = +line
}).on('close', () => {
    solution(input)
    process.exit()
})