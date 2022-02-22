const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.on('line', (line) => {
    input = line.split(' ').map(x => x.split('').reverse().join(''))

}).on('close', () => {
    console.log(Math.max(...input))

    process.exit()
})