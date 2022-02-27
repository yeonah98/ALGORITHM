const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (n) => {
    let tmp = []
    for(i in n) {
        if(tmp.indexOf(n[i]) !== -1 && n[i-1] !== n[i]) {
            return 0
        }
        tmp.push(n[i])
    } 
    return 1
}

input = []
rl.on('line', (line) => {
    input.push(line)

}).on('close', () => {
    input.shift()
    let cnt = 0
    for(i in input) {
        cnt += solution(input[i])
    }
    console.log(cnt)

    process.exit()
})