const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', (line) => {
    input.push(line)
}).on('close', () => {
    let number = +input[0]
    let sum = 0
    let answer = ''
    for(let i = 1; i <= number; i++){
        num1 = +input[i].split(' ')[0]
        num2 = +input[i].split(' ')[1]
        sum = num1 + num2

        answer += 'Case #' + i + ': ' + sum + '\n'
    }
    console.log(answer)
    process.exit()
})