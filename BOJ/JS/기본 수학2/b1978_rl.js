const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (n) => {
    if(n < 2) {
        return false;
    }

    for(let i=2; i<=Math.sqrt(n); i++) {
        if(n % i == 0) {
            return false;
        }
    }
    return true;
};

input = [];
rl.on('line', (line) => {
    input.push(line.split(' ').map(x => +x));   
}).on('close', () => {
    let N = input.shift();
    let cnt = 0;

    for(let i=0; i<N; i++) {
        if( solution(input[0][i]) ) {
            cnt++;
        }
    };
    console.log(cnt);

    process.exit();
})