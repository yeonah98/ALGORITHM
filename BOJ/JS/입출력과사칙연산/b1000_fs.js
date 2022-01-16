const fs = require('fs');

const inputData = fs.readFileSync('/dev/stdin').toString().split(' ').map(item => +item);

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split(' ').map(item => +item);

// input = input.split(' ');
// let arr = []; 
// for (let i = 0; i < input.length; i++) {
//     arr.push(+input[i]); 
// }

function solution(A, B) {
    console.log(A + B);
}

solution(inputData[0], inputData[1]);