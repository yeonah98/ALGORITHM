const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const check = (n) => {
    if (n < 2) {
        return true;
    }

    for(let i=2; i<=Math.sqrt(n); i++) {
        if(n % i == 0) {
            return true;
        }
    }
    return false;
};

const solution = (n) => {
    let A = 2;
    let B = 2;

    let arr =[];
    let cnt = 0;
    while(true) {
        for(let i = A; i<=n; i++) {
            while(check(i)) {
                i++;
            }
            for(let j = B; j<=n; j++) {
                while(check(j)) {
                    j++;
                }
                if(i+j == n) {
                    arr.push([i,j]);
                    cnt++;
                }
            }  
        }
        break;
    }

    let answer = arr[Math.floor(cnt/2)];
    if(answer[0] > answer[1]) {
        console.log(answer[1] + ' ' + answer[0]);
    }
    else {
        console.log(answer[0] + ' ' + answer[1]);
    }
};

input = []
rl.on('line', (line) => {
    input.push(+line);
}).on('close', () => {
    input.shift();
    for(i in input) {
        solution(input[i]);
    }
   
    process.exit();
})