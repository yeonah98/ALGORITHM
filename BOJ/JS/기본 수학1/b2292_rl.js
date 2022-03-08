const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const sum = (tmp) => {
    let sum = 0
    for(let i=1; i<=tmp; i++) {
        sum += i
    }
    return sum
}

const solution = (n) => {
    let tmp = 1
    let start = 2
    let end = 7
    if (n == 1) 
        return 1
    if (2 <= n && n <= end) 
        return 2
    while (true) {
        start = 6*sum(tmp)+1
        end = 6*sum(tmp+1)+1
        if(start <= n && n <= end)
            return tmp+2
        tmp++
    }
}

rl.on('line', (line) => {
    input = +line

}).on('close', () => {
    let answer = solution(input)

    console.log(answer)
    process.exit()
})