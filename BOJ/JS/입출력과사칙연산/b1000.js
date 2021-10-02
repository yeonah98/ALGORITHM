const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();
input = input.split(' ');
let arr = [];
for (let i = 0; i < input.length; i++) {
    arr.push(+input[i]);
}
solution(arr[0], arr[1]);

function solution(A, B) {
    console.log(A + B);
}