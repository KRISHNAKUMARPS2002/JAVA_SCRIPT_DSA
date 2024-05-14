function reverseNumber(n) {
    let reversed = 0;
    while(n !== 0) {
        let lastDigit = Math.floor(n % 10);
        reversed = reversed * 10 + lastDigit;
        n = Math.floor(n / 10);
    }
    return reversed;
}

console.log(reverseNumber(345678));


class Solution {
    reverse_digit(n) {
        let digits = n.toString().split('');
        let reverseDigits = digits.reverse().join('').replace(/^0+/, '');
        let reversedNumber = parseInt(reverseDigits);
        return reversedNumber;
    }
}

const res = new Solution;

console.log(res.reverse_digit(356));
