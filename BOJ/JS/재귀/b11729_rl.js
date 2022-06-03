const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let input;
let result = [];
let cnt = 0;
const onInput = (line) => {
    input = +line;
};

const hanoi = (num, from, to, other) => {
    if(num == 1) {
        cnt++;
        return result.push(`${from} ${to}`);
    }
    hanoi(num-1, from, other, to);
    cnt++;
    result.push(`${from} ${to}`);
    hanoi(num-1, other, to, from);
}

const onClose = () => {
   hanoi(input, 1, 3, 2);
   console.log(cnt);
   console.log(result.join('\n'));
};

rl.on('line', onInput).on('close', onClose);