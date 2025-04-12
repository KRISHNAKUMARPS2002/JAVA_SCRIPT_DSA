//Given a number N. Count the number of digits in N which evenly divide N.

//Note :- Evenly divides means whether N is divisible by a digit i.e. leaves a remainder 0 when divided.

function evenlyDivide(N) {
    let digits = N.toString();
    let count = 0;

    for(let digit of digits) {
        let num = parseInt(digit);

        if(num !== 0 && N % num ===0){
            count++;
        }
    }
    return count;
}

//console.log(evenlyDivide(12345));

function divisors(n) {
    let nums = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            nums.push(i);
            if (i !== n / i) {
                nums.push(n / i);
            }
        }
    }
    return nums;
}

console.log(divisors(36));
