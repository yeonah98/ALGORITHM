const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (A, B, V) => {
    let up = A-B;
    let end = V-B;
    
    console.log(Math.ceil(end/up));
}

let input = []
rl.on('line', (line) => {
    input = line.split(' ').map(x => +x)

}).on('close', () => {
    solution(input[0], input[1], input[2]);

    process.exit();
})