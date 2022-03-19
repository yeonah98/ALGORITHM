const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



/*
let value = 1;
while (true) {
	number -= value;
	if (number <= 0) {
		number += value;
		break;
	}
	value++;
}

if (value % 2 === 1) {
	console.log(`${value - (number - 1)}/${1 + (number - 1)}`);
} else {
	console.log(`${1 + (number - 1)}/${value - (number - 1)}`);
}
*/
const A = (n) => {
    let A = []
    let cnt = 1
    while(!A[n]) {
        if (cnt % 2 == 0) {
            for(let i=1; i<=cnt; i++) {
                A.push(i)
            }
        }
        else {
            for(let i=cnt; i>=1; i--) {
                A.push(i)
            }
        }
       
        cnt++
    }
    return(A[n-1])
}

const B = (n) => {
    let B = []
    let cnt = 1
    while(!B[n]) {
        if(cnt % 2 == 0) {
            for(let i=cnt; i>=1; i--) {
                B.push(i)
            }
        }
        else {
            for(let i=1; i<=cnt; i++) {
                B.push(i)
            }
        }
        cnt++
    }
    return(B[n-1])
}


rl.on('line', (line) => {
    input = +line
}).on('close', () => {
    let a = A(input)
    let b = B(input)
    console.log(a + '/' + b)

    process.exit()
})