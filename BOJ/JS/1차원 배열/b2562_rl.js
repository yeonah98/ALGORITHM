const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', (line) => {
    input.push(+line)
}).on('close', () => {
    let max = input[0]
    let index = 1

    let i = 0
    while(input[i]){
        if (max < input[i]) {
            max = input[i]
            index = i+1
        }
        i++
        if (i == 9) {
            console.log(max)
            console.log(index)
            process.exit()
        }
    }
})