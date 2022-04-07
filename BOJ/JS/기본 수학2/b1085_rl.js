const { checkPrime } = require('crypto');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (x, y, w, h) => {
    let arr = [];

    arr.push(w-x);
    arr.push(x);
    arr.push(h-y);
    arr.push(y);

    let answer = Math.min(...arr);
    console.log(answer);
};


rl.on('line', (line) => {
    input = line.split(' ').map(x => +x); 
}).on('close', () => {
   
    solution(input[0], input[1], input[2], input[3]);

    process.exit();
})