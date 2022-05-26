const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const solution = (n) => {
    if(n <= 1) {
        return 1;
    }

    return n * solution(n-1);
}


rl.on('line', (line) => {
    let answer = solution(+line);
    console.log(answer);

}).on('close', () => {
    process.exit();
})