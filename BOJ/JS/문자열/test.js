let x = 1
let y = 3
// x가 1이 아니거나 y가 0이 아닐 때 실행한다.
// x가 1이고 y가 0이 아닐 때 실행한다.
// x가 1이고 y가 0일때 실행하지 않는다.
while(!(x == 1 && y == 0)) {
    console.log('good')
    break
}

// x가 1이 아니고 y가 0이 아닐때 실행한다.
// x가 1이거나 y가 0일 때 실행하지 않는다.
while(x !== 1 && y !== 0) {
    console.log('great')
    break
}