const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (M, arr) => {
    //arr에서 3개 선택
    let choice = [];
    let len = arr.length;
    let sum = 0;
    let Min = 3000000;
    let answer;

    for(let i=0; i<len; i++) {
        choice[0] = arr[i];
        for(let j=i+1; j<len; j++) {
            choice[1] = arr[j];
            for(let k=j+1; k<len; k++) {
                choice[2] = arr[k];
                //3개의 합과 M의 차이 구하기
                sum = choice.reduce((a,b) => a+b,0)
                result = (M-sum);

                //차이 없으면 합 리턴 후 끝
                if(result == 0) {
                    console.log(sum);
                    return;
                }
                //제일 작은 차이의 sum 저장
                if(Min > result && result > 0) {
                    Min = result;
                    answer = sum;
                }
            }
        }
    }
    console.log(answer);
    return;
}

input = [];
rl.on('line', (line) => {
    input.push(line.split(' ').map(x => +x));
}).on('close', () => {
    solution(input[0][1], input[1]);    

    process.exit();
})