const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(ln){
    const input = ln.split(' ').map(item => +item);

    //const result = input[0] + input[1];
    console.log(input[0] + input[1]);

    //rl.close();
})
.on('close', function(){
    process.exit;
})