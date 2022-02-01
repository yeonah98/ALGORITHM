const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (n) => {
    for(var i=1; i < 10; i++) {
        //result = i * n;
        console.log(n + " * " + i + " = " + (i * n));
    }

}

rl.on('line', (line) => {
    const input = line.split(' ').map(item => +item);
    solution(input);
}).on('close',() => {
    process.exit();
});