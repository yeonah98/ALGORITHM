const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const average = (arr) => {
   let average = arr.reduce((a, b) => a+b) / arr.length
   return average
}

const solution = (arr) => {
    let N = arr.shift()
    let Average = average(arr)
    let cnt = 0

    for(i in arr) {
        if(arr[i] > Average) {
            cnt += 1
        }
    }
    let answer = (cnt/N)*100
    console.log(answer.toFixed(3) + '%')
}

let input = []

rl.on('line', (line) => {
    input.push(line)

}).on('close', () => {
    let C = input.shift()
    input = input.map(x => x.split(' ').map(y => +y))
 
    for(i in input) {
        solution(input[i])
    }

    process.exit()
})