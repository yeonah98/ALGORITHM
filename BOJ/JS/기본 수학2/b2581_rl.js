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

const solution = (A, B) => {
    let arr = [];

    while(A<=B) {
        if(check(A)) {
            arr.push(A);
        }
        A++;
    }
    
    if(arr[0] == null) {
        console.log(-1);
    }
    else {
        let sum = arr.reduce((a, b) => a+b);
        console.log(sum + '\n' + arr[0]);
    }
};

input = [];
rl.on('line', (line) => {
    input.push(+line);   
}).on('close', () => {
    let A = input[0];
    let B = input[1];

    solution(A, B)

    process.exit();
})