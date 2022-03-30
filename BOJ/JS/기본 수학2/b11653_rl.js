const { checkPrime } = require('crypto');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (N) => {
    let S = 2;
    let arr = [];

    while(N > 1) {

        if(N % S == 0) {
            N /= S;
            arr.push(S);
        }
        else {
            S++;
        }
    };

    let answer = ''
    for(i in arr) {
        answer += arr[i] + '\n';
    }
    console.log(answer);
};

rl.on('line', (line) => {
    input = +line;   
}).on('close', () => {

    solution(input)

    process.exit();
})