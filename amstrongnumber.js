function isArmstrongNum(N) {
    let digit1 = Math.floor(N / 100);
    let digit2 = Math.floor((N % 100) / 10);
    let digit3 = N % 10;

    let sumOfCubes = Math.pow(digit1, 3) + Math.pow(digit2, 3) + Math.pow(digit3, 3);

    return sumOfCubes === N ? "Yes" : "No";
}

console.log(isArmstrongNum(153));