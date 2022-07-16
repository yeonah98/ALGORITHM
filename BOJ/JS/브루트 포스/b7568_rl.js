const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout        
});

input = [];

const biggerCheck = (a, b) => {
    if( (a[0] < b[0]) && (a[1] < b[1]) ) {
        return true;
    }
    
    return false;
}

const solution = (arr) => {
    let answer = new Array(arr.length).fill(1);

    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length; j++) {
            if( (i !== j) && biggerCheck(arr[i], arr[j]) ){
                answer[i] += 1;
            }
        }
    }

    console.log(answer.join(' '));
}

rl.on("line", (line) => {
    input.push(line.split(' ').map(x => +x));
   
}).on("close", () => {
    input.shift();
    solution(input);

    process.exit();
})