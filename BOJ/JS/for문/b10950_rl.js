const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (x, y) => {
    console.log(x + y);
};

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let number = +input.shift();
    input = input.map(x => x.split(' ').map(y => +y))
    for (let i = 0; i < number; i++) {
        solution(input[i][0], input[i][1]);
       }
    process.exit();
});
