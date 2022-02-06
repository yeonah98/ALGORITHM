const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', (line) => {
    input.push(line)

}).on('close', () => {
    let N = +input[0].split(' ')[0]
    let X = +input[0].split(' ')[1]
    let A = input[1].split(' ').map(x => +x)
    let answer = ''
    for(let i=0; i<N; i++){
        if(A[i] < X) {
            //process.stdout.write(String(A[i]) + ' ')
            answer += A[i] + ' '
        }
    }
    console.log(answer)
    process.exit()
})