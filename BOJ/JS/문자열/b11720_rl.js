const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (arr) => {
    // let sum = 0
    // for(i in arr) {
    //     sum += arr[i]
    // }
    // console.log(sum)

    console.log( arr.reduce((a, b) => a + b) )
}

let input = []

rl.on('line', (line) => {
    input.push(line.toString().split('').map(x => +x))

}).on('close', () => {
    solution(input[1])

    process.exit()
})