let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');

input.shift();
input.sort((a,b) => a-b);
console.log(input.join('\n'));