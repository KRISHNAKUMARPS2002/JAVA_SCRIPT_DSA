//BruteForce Approach
function findMissingRepeatingNumbers(a) {
    const n = a.length;
    let repeating = -1, missing = -1;

    for (let i = 1; i <= n; i++) {
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            if (a[j] == i) cnt++;
        }

        if (cnt == 2) repeating = i;
        else if (cnt == 0) missing = i;

        if (repeating != -1 && missing != -1) break;
    }

    return [repeating, missing];
}
//Better Approach
function findMissingRepeatingNumbers(a) {
    const n = a.length;
    const hash = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        hash[a[i]]++;
    }

    let repeating = -1, missing = -1;
    for (let i = 1; i <= n; i++) {
        if (hash[i] == 2) repeating = i;
        else if (hash[i] == 0) missing = i;

        if (repeating != -1 && missing != -1) break;
    }

    return [repeating, missing];
}

//Optimal Aproach
function findMissingRepeatingNumbers(a) {
    const n = a.length; // size of the array

    // Find Sn and S2n:
    const SN = (n * (n + 1)) / 2;
    const S2N = (n * (n + 1) * (2 * n + 1)) / 6;

    // Calculate S and S2:
    let S = 0, S2 = 0;
    for (let i = 0; i < n; i++) {
        S += a[i];
        S2 += a[i] * a[i];
    }

    //S-Sn = X-Y:
    const val1 = S - SN;

    // S2-S2n = X^2-Y^2:
    let val2 = S2 - S2N;

    //Find X+Y = (X^2-Y^2)/(X-Y):
    val2 = val2 / val1;

    //Find X and Y: X = ((X+Y)+(X-Y))/2 and Y = X-(X-Y),
    // Here, X-Y = val1 and X+Y = val2:
    const x = (val1 + val2) / 2;
    const y = x - val1;

    return [x, y];
}