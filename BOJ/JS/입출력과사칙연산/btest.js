const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Do you love Jihun? ', (as) => {
    //const input = line.split(' ').map(item => +item);

    const result = `I love Jihun ${as}`;
    console.log(result);

    rl.close();
})