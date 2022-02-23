const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (n) => {
    let cnt = 0
    for(i in n) {
        if(n[i] == 'A' || n[i] == 'B' || n[i] == 'C') {
            cnt += 2
        }
        else if(n[i] == 'D' || n[i] == 'E' || n[i] == 'F') {
            cnt += 3
        }
        else if(n[i] == 'G' || n[i] == 'H' || n[i] == 'I') {
            cnt += 4
        }
        else if(n[i] == 'J' || n[i] == 'K' || n[i] == 'L') {
            cnt += 5
        }
        else if(n[i] == 'M' || n[i] == 'N' || n[i] == 'O') {
            cnt += 6
        }
        else if(n[i] == 'P' || n[i] == 'Q' || n[i] == 'R' || n[i] == 'S') {
            cnt += 7
        }
        else if(n[i] == 'T' || n[i] == 'U' || n[i] == 'V') {
            cnt += 8
        }
        else if(n[i] == 'W' || n[i] == 'X' || n[i] == 'Y' || n[i] == 'Z') {
            cnt += 9
        }
    }
    return cnt
}

rl.on('line', (line) => {
    input = line
}).on('close', () => {
    let length = input.length
    let cnt = solution(input)
    console.log(length + cnt)

    process.exit()
})