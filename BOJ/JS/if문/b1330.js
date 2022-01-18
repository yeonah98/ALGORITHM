const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (a, b) => {
    if(a > b) console.log('>');
    else if(a < b) console.log('<');
    else console.log('==');

}

rl.on('line', (line) => {
    const input = line.split(' ').map(item => +item);
    solution(input[0], input[1]);
}).on('close',() => {
    process.exit();
});