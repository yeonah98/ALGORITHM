const { off } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (N) => {  
    if(N%5 == 0) {
        return N/5;
    }

    let cnt = 0
    while(true) {
        N -= 3;
        cnt++
        if(N%5 == 0) {
            return cnt+(N/5)
        }
        if(N<0) {
            return -1
        }
        if(N == 0) {
            return cnt;
        }
    }
}


rl.on('line', (line) => {
    input = +line

}).on('close', () => {
    console.log(solution(input));

    process.exit();
});