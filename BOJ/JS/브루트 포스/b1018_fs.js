let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
let [N, M] = input.shift().split(' ').map(x => +x);

let w = ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'];
let b = ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'];
let wF = [w, b, w, b, w, b, w, b];
let bF = [b, w, b, w, b, w, b, w];
let Wcnt = 0
let Bcnt = 0
let n = N - 7;
let m = M - 7;
let answer = []

for(let i=0; i<N; i++) {
    input[i] = input[i].split('')
}

const Wcheck = (n, m) => {
    for(let i=0; i<8; i++) {
        for(let j=0; j<8; j++) {
            if(input[i+n][j+m] !== wF[i][j]) {
                Wcnt++;
            }
        }
    }
    answer.push(Wcnt);
    Wcnt = 0;
}
const Bcheck = (n, m) => {
    for(let i=0; i<8; i++) {
        for(let j=0; j<8; j++) {
            if(input[i+n][j+m] !== bF[i][j]) {
                Bcnt++;
            }
        }
    }
    answer.push(Bcnt);
    Bcnt = 0;
}

for(let i=0; i<n; i++) {
    for(let j=0; j<m; j++) {
        Wcheck(i,j);
        Bcheck(i,j);
    }
}

console.log(Math.min(...answer));