const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (X) => {

    let groupCnt = 0;

    while(X > 0) {
        groupCnt++;
        X -= groupCnt;
    }

    if(groupCnt % 2 == 0) {
        console.log(`${groupCnt+X}/${1-X}`);
    }else {
        console.log(`${1-X}/${groupCnt+X}`);
    }
}

rl.on('line', (line) => {
    input = +line;

}).on('close', () => {
    solution(input);

    process.exit();
})