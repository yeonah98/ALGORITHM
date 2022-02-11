const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const average = (n) => {
    let answer = n.reduce((a, b) => a+b) / n.length
    console.log(answer)
}

let input = []

rl.on('line', (line) => {
    input.push(line.split(' ').map(x => +x))

}).on('close', () => {
    //let N = input.shift()
    // let Max = input[0][0]
    // for(let i=0; i<N; i++) {
    //     if(Max < input[0][i]) {
    //         Max = input[0][i]
    //     }
    // }
    let Max = Math.max.apply(null, input[1])
    let result = input[1].map(x => x/Max*100)

    average(result)

    process.exit()
})