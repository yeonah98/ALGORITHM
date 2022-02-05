const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', (line) => {
    input.push(line)

}).on('close', () => {
    let length = +input.shift()
    let answer = ''
    for(let i = 0; i < length; i++) {
        let num1 = +input[i].split(' ')[0]
        let num2 = +input[i].split(' ')[1]

        answer = answer + (num1 + num2 + '\n')
    }
    console.log(answer)
    process.exit()
})