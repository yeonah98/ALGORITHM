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
    let a = Math.floor(n / 2);
    let b = Math.ceil(n / 2);

    if(check(a) && check(b)) {
        console.log(a + ' ' + b);
    }
    else {
        while(true) {
            a -= 1;
            b += 1;
            if(check(a) && check(b)) {
                console.log(a + ' ' + b);
                break;
            }
        }
    }
};

input = [];
rl.on('line', (line) => {
    input.push(+line);
}).on('close', () => {
    input.shift();

    for(i in input) {
        solution(input[i]);
    };
   
    process.exit();
});