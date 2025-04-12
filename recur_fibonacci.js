function fib(n) {
    if (n <= 1) {
        return n;
    } else return fib(n-1) + fib(n-2);
}
console.log(fib(12));


// #######

function fibSequence(n) {
    let fibArray = [];
    for (let i = 0; i <= n; i++) {
        if (i <= 1) {
            fibArray.push(i);
        } else {
            fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
        }
    }
    return fibArray;
}

console.log(fibSequence(12));  
