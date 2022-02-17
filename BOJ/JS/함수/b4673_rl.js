let arr = new Array(10000).fill().map((v, i) => i+1)

const d = (n) => {

    let num = n
    let arr = n.toString().split('').map(x => +x)
    let sum = arr.reduce((a,b) => a+b)

    return (num+sum)
}

let num = []
for(let i=1; i<10000; i++) {
    num.push(d(i))
}

let answer = []
answer = arr.filter(x => !num.includes(x))     

console.log(answer.join('\n'))

