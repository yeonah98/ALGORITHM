const { checkPrime } = require('crypto');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const check = (n) => {
    if (n < 2) {
        return false;
    }

    for(let i=2; i<=Math.sqrt(n); i++) {
        if(n % i == 0) {
            return false;
        }
    }
    return true;
};

const solution = (n) => {
    let cnt = 0;

    for(let i = n+1; i <= 2*n; i++) {
        if(check(i)) {
            cnt++;
        }
    }
    console.log(cnt);
};

input = []
rl.on('line', (line) => {
    input.push(+line);
}).on('close', () => {
    for(i in input) {
        if(input[i] == 0) {
            break;
        }
        solution(input[i])
    }

    process.exit();
})