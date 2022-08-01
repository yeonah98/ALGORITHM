let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(filepath).toString();

let six = '666';
let cnt = 0;
let number = '665';

while(cnt != input) {
    if(number.includes(six)) {
        cnt++;
    }
    number = parseInt(number) + 1;
    number = String(number);
}
console.log(number-1);
