function paliandrome(N) {
    let str = N.toString();
    let reversedString = str.split('').reverse().join('');

    return str === reversedString ? "Yes" : "No";
}

console.log(paliandrome(121));