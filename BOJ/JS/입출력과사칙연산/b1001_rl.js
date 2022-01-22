const { stdin } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.on('line', (line) => {
    const input = line.split(' ').map(item => +item);

    const result = input[0] - input[1];

    console.log(result);

    rl.close();
});