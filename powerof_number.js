// Recursion method

function recPower(x, n) {
    if (n === 0) {
        return 1;
    } 
    if (x === 0) return 0;

    return x * recPower(x , n-1);
} 

console.log(recPower(2, 3));

// With for loop

function power(x, n) {
    let result = 1;
    for(let i = 0; i < n; i++){
        result *= x;
    }
    return result;
}

console.log(power(2,4));