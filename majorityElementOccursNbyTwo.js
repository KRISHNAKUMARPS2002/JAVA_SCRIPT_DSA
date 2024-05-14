//BruteForce Approach
function majorityElement(arr) {
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        let count = 0
        for(let j = 0; j < n; j++) {
            if(arr[i] === arr[j]) {
                count++;
            }
        }
        if(count > Math.floor(n / 2)) {
            return arr[i];
        }
    }
    return -1;
}

//Better Approach
function majorityElement(arr) {
    let n = arr.length;

    const map = new Map();
    for(let i = 0; i < n; i++) {
        const num = arr[i];
        if(map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    for(const [num, count] of map) {
        if(count > Math.floor(n / 2)) {
            return num;
        }
    }
    return -1;
}

//Optimal approach
function majorityElement(arr) {
    let n = arr.length;
    let cnt = 0; // Count
    let el; // Element
    for(let i = 0; i < n; i++) {
        if(cnt === 0) {
            cnt =1;
            el = arr[i];
        } else if(arr[i] === el) {
            cnt++;
        } else {
            cnt--;
        }
    }
    let cnt1 = 0;
    for(let i = 0; i < n; i++) {
        if(arr[i] === el) {
            cnt1++;
        }
    }
    if(cnt1 > Math.floor(n / 2)) {
        return el;
    }
    return -1;
}
