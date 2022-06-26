const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (input) => {
  let arr = [];
  for(let i=0; i<1000000; i++) {

    let div = i.toString().split('').map(x => +x);
    let sum = div.reduce((a,b) => a+b) + i;
    
    arr.push(sum)
  }
  let result = arr.indexOf(input)
  if(result != -1) {
      console.log(result)
  } else {
      console.log(0)
  }

}

rl.on('line', (line) => {
    input = +line
}).on('close', () => {
    solution(input);    

    process.exit();
})