function squareRoot(n) {
    if (n === 0 || n === 1) return n;

    let i = 1;
    let result = 1;
    while (result <= n) {
        i++;
        result = i * i;
    }
    return i-1;
}

console.log(squareRoot(25));

// OR 

function squareRoot(n) {
    if (n === 0 || n === 1) return n; 

    let i = 1;
    while(i * i <= n) {
        i++;
    }
    return i - 1;
}

console.log(squareRoot(25));