const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (arr) => {
    let score = 0
    let tmp = []
    for(i in arr) {
        if(arr[i] == 'O') {
            score += tmp.length + 1
            tmp.push(arr[i])
        }
        else {
            tmp = []
        }
    }

    console.log(score)
}

let input = []

rl.on('line', (line) => {
    input.push(line)

}).on('close', () => {
    let num = input.shift()
    for(i in input) {
        solution(input[i])
    }

    process.exit()
})