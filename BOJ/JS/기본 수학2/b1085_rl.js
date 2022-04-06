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
    
    for(let i = A; i<=B; i++) {
        if(check(i)) {
            arr.push(i);
        };
    };

    console.log(arr.join('\n'));
};


rl.on('line', (line) => {
    input = line.split(' ').map(x => +x); 
}).on('close', () => {
    let A = input[0];
    let B = input[1];

    solution(A, B)

    process.exit();
})