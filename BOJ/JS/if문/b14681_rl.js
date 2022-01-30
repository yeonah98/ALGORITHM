const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (x, y) => {
    if (x>0 && y>0) console.log(1);
    else if (x<0 && y>0) console.log(2);
    else if (x<0 && y<0) console.log(3);
    else console.log(4);
}

let input = [];
rl.on('line', (line) => {
    input.push(line);
  
}).on('close', () => {
    solution(input[0], input[1]);
    process.exit();
});
