const { off } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (N) => {  
  
}


rl.on('line', (line) => {
    input = +line

}).on('close', () => {
    console.log(solution(input));

    process.exit();
});