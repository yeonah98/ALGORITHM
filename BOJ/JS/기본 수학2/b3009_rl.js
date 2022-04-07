const readline = require("readline");
const { arrayBuffer } = require("stream/consumers");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input = [];
rl.on('line', (line) => {
    input.push(line.split(' ').map(x => +x))
}).on('close', () => {
    let x_arr = [];
    let y_arr = [];
    for(i in input) {
        if(x_arr.includes(input[i][0])) {
            let index = x_arr.indexOf(input[i][0]);
            x_arr.splice(index, 1);
        }
        else {
            x_arr.push(input[i][0]);
        }
       
        if(y_arr.includes(input[i][1])) {
            let index = y_arr.indexOf(input[i][1]);
            y_arr.splice(index, 1);
        }
        else {
            y_arr.push(input[i][1]);
        }
    };
  
    console.log(x_arr[0] + ' ' + y_arr[0]);
    process.exit();
})