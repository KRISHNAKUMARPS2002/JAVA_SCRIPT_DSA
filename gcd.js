function gcd(a, b) {
    let result = Math.min(a, b);

    while (result > 0) {
        if(a % result == 0 && b % result == 0) {
            break;
        }
        result --;
    }
    return result;
}


console.log(gcd(30, 45));  // Output: 15
