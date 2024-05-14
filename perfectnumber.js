function isPerfect(N) {
    let sum = 0;
    for (let i = 1; i <= N / 2; i++) {  // Iterate up to N/2 (including N/2)
        if (N % i === 0) {  // Check if i is a divisor of N
            sum += i;  // Add i to the sum if it's a divisor
        }
    }
    return sum === N;  // Return true if sum equals N (perfect number), otherwise false
}

console.log(isPerfect(6));  // Output: true
