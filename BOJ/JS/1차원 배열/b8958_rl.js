const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (arr) => {
    let score = 0
    let cnt = 0
    for(i in arr) {
        if(arr[i] == 'O') {
            score += 1
        }
    }
    for(i in arr) {
        if (arr[i] == arr[i+1]) {
            cnt += 1
        }
    }
    console.log(cnt + " " + score)
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