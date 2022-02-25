const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (n) => {
    let cnt = 0
    for(i in n) {
        if(((n[i-1] == 'c' || n[i-1] == 's' || n[i-1] == 'z') && n[i] == '=') || ((n[i-1] == 'c' || n[i-1] == 'd') && n[i] == '-') || ((n[i-1] == 'l' || n[i-1] == 'n') && n[i] == 'j')) {
            cnt -= 1
            if(n[i-2] == 'd' && n[i-1] == 'z' && n[i] == '=') {
                cnt -= 1
            }
        }
        cnt++
    }
    console.log(cnt)
}

rl.on('line', (line) => {
    input = line

}).on('close', () => {
    solution(input)
    process.exit()
})