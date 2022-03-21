const { countReset } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (H, W, N) => {
    let cnt = 1;

    while(true) {
        N -= H;
        if(N <= 0) {
            N += H;
            if(cnt<10) {
                 console.log(N + '0' + cnt);
            }
            else {
                console.log(N + '' + cnt);
            }
            break;
        }
        cnt++;
    }
}

input = []
rl.on('line', (line) => {
    input.push(line.split(' ').map(x => +x));
}).on('close', () => {

    for(let i=1; i<=input[0][0]; i++) {
        solution(input[i][0], input[i][1], input[i][2]);
    }

    process.exit();
})