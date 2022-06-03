const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let input;
let result = "";
const onInput = (line) => {
    input = +line;
};

const star = (height, width, input) => {
    if (height % 3 === 1 && width % 3 === 1) {
        result += " ";
        return;
    } else {
        if (input === 1) {
            result += "*";
            return;
        } else {
            star(Math.floor(height/3), Math.floor(width/3), Math.floor(input/3));
            return;
        }
    }
};

const onClose = () => {
    for(let height=0; height < input; height++) {
        for(let width=0; width < input; width++) {
            star(height, width, input);
        }
        result += "\n";
    }
    console.log(result);
    process.exit();
};

rl.on('line', onInput).on('close', onClose);