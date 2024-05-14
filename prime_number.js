function isPrime(N) {
    if (N <= 1) return 0;
    if (N == 2) return 1;

    for(let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            return 0;
        }
    }
    return 1;
}

console.log(isPrime(17));