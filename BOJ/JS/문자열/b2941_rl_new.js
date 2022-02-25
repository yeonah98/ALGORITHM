const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (n) => {
   n = n
   .replace(/c=/gi, '.')
   .replace(/c-/gi, '.')
   .replace(/dz=/gi, '.')
   .replace(/d-/gi, '.')
   .replace(/lj/gi, '.')
   .replace(/nj/gi, '.')
   .replace(/s=/gi, '.')
   .replace(/z=/gi, '.')

   console.log(n.length)
}

rl.on('line', (line) => {
    input = line

}).on('close', () => {
    solution(input)
    process.exit()
})