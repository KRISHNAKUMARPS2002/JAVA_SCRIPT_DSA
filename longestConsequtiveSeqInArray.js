//Brute Force Approach
function linearSearch(arr, num) {
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        if(arr[i] === num) {
            return true;
        }
    }
    return false;
}
function longestSuccessiveElements(arr) {
    let n = arr.length;
    let longest = 1;
    for(let i = 0; i < n; i++) {
        let x = arr[i];
        let count = 1;
        while(linearSearch(arr, x + 1) === true) {
            x += 1;
            count++;
        }
        longest = Math.max(count, longest);
    }
    return longest;
}

//Better Approach
function longestSuccessiveElements(arr) {
    if (arr.length === 0) return 0;

    arr.sort((a, b) => a - b);
    let lastNum = -Infinity;
    let currentCount = 0;
    let longestCount = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] - 1 === lastNum) {
            // Current number is part of the consecutive sequence
            currentCount++;
        } else {
            // Start a new consecutive sequence
            currentCount = 1;
        }
        // Update lastNum for the next iteration
        lastNum = arr[i];
        // Update longestCount if currentCount is greater
        longestCount = Math.max(longestCount, currentCount);
    }

    return longestCount;
}

//Optimised code
function longestSuccessiveElements(a) {
    let n = a.length;
    if (n === 0) return 0;
    
    let st = new Set();
    let longest = 1; // Initialize longest

    for(let i = 0; i < n; i++) {
        st.add(a[i]);
    }
    for(let it of st) {
        if(st.has(it - 1)) {
            let count = 1;
            let x = it; // Initialize x
            while(st.has(x + 1)) {
                x = x + 1;
                count = count + 1;
            }
            longest = Math.max(count, longest);
        }
    }
    return longest;
}
