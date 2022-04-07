const readline = require("readline");
const { arrayBuffer } = require("stream/consumers");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (arr) => {
    let z = Math.max(...arr);
    let index = arr.indexOf(z);
    arr.splice(index, 1)

    let x = arr[0];
    let y = arr[1];

    if(x == 0) {
        return;
    }
    if(x ** 2 + y ** 2 == z ** 2) {
        console.log("right");
    }
    else {
        console.log("wrong");
    }
}

input = [];
rl.on('line', (line) => {
    input.push(line.split(' ').map(x => +x))
}).on('close', () => {
    for(i in input) {
        solution(input[i])
    }

    process.exit();
})