const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

const solution = (n) => {
    let cnt = 0
    for(let i=0; i<10; i++) {
        n[i] = n[i] % 42
    }
    for(let i=0; i<10; i++) {
        for(let j=i+1; j<10; j++) {
            if(n[i] == n[j]) {
                cnt += 1
                j = 10
            }
        }
    }
    console.log(10 - cnt)
}

rl.on('line', (line) => {
    input.push(line)

}).on('close', () => {
    solution(input)
    process.exit()
})