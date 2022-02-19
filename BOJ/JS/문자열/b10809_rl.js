const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (S) => {
    let arr = new Array(26).fill(-1)

    for(i in S) {
        if(arr[S[i]] == -1) {
            arr[S[i]] = i
        }
    }
    console.log(arr.join(' '))
}


rl.on('line', (line) => {
    input = line

}).on('close', () => {
    solution(input.split('').map(x => x.charCodeAt(0)-'a'.charCodeAt(0)))

    process.exit()
})