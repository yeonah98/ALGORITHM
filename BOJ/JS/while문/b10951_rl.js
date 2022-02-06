const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', (line) => {
    input.push(line)

}).on('close', () => {
    let sum = ''
    input = input.map(x => x.split(' ').map(y => +y))

    let i = 0
    while(input[i]) {
        sum += input[i][0] + input[i][1] + '\n'
        i++
    }
    console.log(sum)

    process.exit()
})