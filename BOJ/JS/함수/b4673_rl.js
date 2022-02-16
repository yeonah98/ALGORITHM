let arr = new Array(100).fill().map((v, i) => i+1)

const d = (n) => {
    if (n >  100) {
        return n
    }
    let num = n
    let arr = n.toString().split('').map(x => +x)
    let sum = arr.reduce((a,b) => a+b)
    console.log(num+sum)

    return (d(num+sum))
}

console.log(arr)
