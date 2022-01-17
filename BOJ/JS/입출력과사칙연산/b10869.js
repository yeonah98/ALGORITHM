const { on } = require('events');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const input = line.split(' ').map(item => +item);

    console.log(input[0] + input[1]);
    console.log(input[0] - input[1]);
    console.log(input[0] * input[1]);
    console.log(Math.floor(input[0] / input[1]));
    console.log(input[0] % input[1]);

    rl.close();
});