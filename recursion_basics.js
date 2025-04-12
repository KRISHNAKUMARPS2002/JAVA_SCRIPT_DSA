function print(i, n) {
    if(i > n) return;
    console.log("KRISHNA");
    print(i + 1, n);
}

function main() {
    const n = 5;
    print(1, n);
}

//main();

function print(i, n) {
    if(i > n) return;
    console.log(i);
    print(i + 1, n);
}

function main() {
    const n = 5;
    print(1, n);
}

// main();

function print(i, n) {
    if(i < 1) return;
    console.log(i);
    print(i - 1, n);
}

function main() {
    const n = 5;
    print(n, n);
}

// main();

//Sum of N numbers

function sumOfNaturalNumbers(N) {
    if(N === 0) {
        return 0;
    }
    return N + sumOfNaturalNumbers(N - 1);
}

//console.log(sumOfNaturalNumbers(5));