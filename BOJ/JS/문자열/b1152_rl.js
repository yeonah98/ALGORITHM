const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// const solution = (arr) => {
//     let cnt = 1
//     let result = arr.trim()
//     for(i in result) {
//         if(result[i] == ' '){
//             cnt++
//         }
//     }
//     if(result) {
//         console.log(cnt)
//     }
//     else {
//         console.log(0)
//     }
// }

rl.on('line', (line) => {
    input = line

}).on('close', () => {
    input = input.trim().split(' ')
    input[0] == '' ? console.log(0) : console.log(input.length)
    //solution(input)
    process.exit()
})