const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (a, b) => {
    const a1 = parseInt(a);
    const b2 = new Array(b[0], b[1], b[2]).map(b => +b);
    const s1 = a1 * b2[2];
    const s2 = a1 * b2[1];
    const s3 = a1 * b2[0];
    const s4 = a1 * b;
    
    console.log(s1);
    console.log(s2);
    console.log(s3);
    console.log(s4);
}

let input = [];
rl.on('line', (line) => {
    input.push(line);
  
}).on('close', () => {
    solution(input[0], input[1]);
    process.exit();
});