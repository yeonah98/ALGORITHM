const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (line) => {
    input = +line
}).on('close', () => {
    let first = input
    let last = 0
    let cnt = 0
    if(input == 0) {
        cnt = 1
    }

    while(last !== first){
        input = ((input%10)*10) + ((Math.floor(input/10)+input%10)%10)
        last = input
        cnt++
    }
    console.log(cnt)
   
    process.exit()
})