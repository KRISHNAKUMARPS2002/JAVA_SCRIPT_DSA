function count(n) {
    let count = 1;
    while (n >= 10) {
        n = Math.floor(n/10);
        ++count;
    }
    return count;
}

console.log(count(132));

