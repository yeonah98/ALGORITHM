const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', (line) => {
    input.push(line)

}).on('close', () => {
    let N = +input[0]
    let arr = input[1].split(' ').map(x => +x)
    let min = arr[0]
    let max = arr[0]

    for(let i=0; i<N; i++){
        if(min > arr[i]) {
            min = arr[i]
        }
        if(max < arr[i]) {
            max = arr[i]
        }
    }
    console.log(min + ' ' + max)

    process.exit()
})