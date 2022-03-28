const { off } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (A, B) => {
    
    console.log((A+B).toString());
}


rl.on('line', (line) => {
    input = line.split(' ').map(x => BigInt(x));

}).on('close', () => {
    solution(input[0], input[1]);

    process.exit();
});