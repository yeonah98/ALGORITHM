const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (arr) => {
    let R = +arr[0]
    let S = arr[1]
    let answer = ''

    for(i in S) {
        let r = 0
        while(r<R) {
            answer += S[i]
            r++
        }
    }
  
    console.log(answer)
}

let input = []
rl.on('line', (line) => {
    input.push(line)

}).on('close', () => {
    input.shift()
    for(i in input) {
        solution(input[i].split(' '))
    }
    process.exit()
})