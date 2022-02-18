const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const check = (n) => {
    let arr = n.toString().split('').map(x => +x)
    if((arr[1]-arr[0]) == (arr[2]-arr[1])) {
        return 1
    }
    return 0
}

const solution = (n) => {
    if(n<=99) {
        console.log(n)
    }
    else {
        let cnt = 0
        for(let i=100; i<=n; i++) {
            cnt += check(i)
        }
        console.log(99 + cnt)
    }
}
 
rl.on('line', (line) => {
    input = +line

}).on('close', () => {
    solution(input)
    process.exit()
})