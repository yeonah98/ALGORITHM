const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (n) => {
    let circle = Math.PI * n**2
    let taxi = 2 * n**2

    console.log(circle.toFixed(6) + '\n' + taxi.toFixed(6))
};

rl.on('line', (line) => {
    input = +line;
}).on('close', () => {
    solution(input);    

    process.exit();
})