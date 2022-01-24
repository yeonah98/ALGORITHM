const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (number) => {
    if(number % 4 == 0 && (number % 100 !== 0 || number % 400 == 0)) console.log('1');
    else console.log('0');
}

rl.on('line', (line) => {
    const input = line.split(' ').map(item => +item);
    solution(input);
}).on('close',() => {
    process.exit();
});