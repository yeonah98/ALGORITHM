const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const solution = (n) => {
    if(n == 0) {
        return 0;
    }
    else if(n == 1) {
        return 1;
    }
    else {
        return solution(n-1) + solution(n-2);
    }
}

rl.on('line', (line) => {
   console.log(solution(+line));

}).on('close', () => {
    process.exit();
})