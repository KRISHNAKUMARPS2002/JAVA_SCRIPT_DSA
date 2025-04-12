function factors(N) {
    let divisors = [];
    for(let i = 1; i < N; i++){
        if (N % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

console.log(factors(100));


// Sum of all divisors from 1 to n;

function sumOfFactors(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            sum += i;
        }
    }
    return sum;
    
}

console.log(sumOfFactors(100));