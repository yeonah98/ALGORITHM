let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(filepath).toString().split('\n');

input.shift();
input.sort((a,b) => a-b);
console.log(input.join('\n'));

// const readline = require('readline');
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });

// input = [];
// rl.on('line', (line) => {
//     input.push(line);
// }).on('close', () => {
//     input.shift();
//     input.sort((a,b) => a-b);
//     console.log(input.join('\n'));
// })
