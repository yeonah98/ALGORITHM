const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (result) => {
    let cnt = new Array(10).fill(0)
    let answer = ''

    for(let i=0; i<11; i++){
        for(let n=0; n<10; n++){
            if(result[i] == String(n)) {
                cnt[n] += 1       
            }
        }
    }
    for(let i=0; i<10; i++){
        answer += cnt[i] + '\n'        
    }
    console.log(answer)
}

const input = []

rl.on('line', (line) => {
    input.push(line)

}).on('close', () => {
    let A = +input[0]
    let B = +input[1]
    let C = +input[2]

    let result = String(A*B*C)
    solution(result)

    process.exit()
})
