const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (k, n) => {
    let house = Array.from(Array(k+1), () => Array(n+1).fill(0));

    for(let i=0; i<=n; i++) {
        house[0][i] = i;
    }

    for(let i=1; i<=k; i++) {
        for(let j=1; j<=n; j++) {
            house[i][j] = house[i-1][j] + house[i][j-1]
        }
    }

    console.log(house[k][n]);
}

input = [];
rl.on('line', (line) => {
    input.push(+line);

}).on('close', () => {
    for(let i=1; i<input[0]*2; i+=2) {
        solution(input[i], input[i+1]);
    }

    process.exit();
});