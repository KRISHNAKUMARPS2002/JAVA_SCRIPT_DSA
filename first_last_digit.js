function firstDigit(n) {
    while(n >= 10) {
        n = Math.floor(n/10);
    }
    return n;
}

function lastDigit(n) {
    return Math.floor(n % 10);
}

console.log(firstDigit(3455));
console.log(lastDigit(23456));