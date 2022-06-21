let num = 3;
for(let i=0; i<num; i++) {
    console.log(' '.repeat(num-i)+'*'.repeat(2*i+1));
}
for(let i=num-1; i>0; i--) {
    console.log(' '.repeat(num-i+1)+'*'.repeat(2*i-1));
}