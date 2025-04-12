function sortArray(arr) {
    let cnt0 = 0;
    let cnt1 = 0;
    let cnt2 = 0;

    for (const num of arr) {
        if (num === 0) {
            cnt0++;
        } else if (num === 1) {
            cnt1++;
        } else {
            cnt2++;
        }
    }

    for (let i = 0; i < cnt0; i++) {
        arr[i] = 0;
    }

    for (let i = cnt0; i < cnt0 + cnt1; i++) {
        arr[i] = 1;
    }

    for (let i = cnt0 + cnt1; i < arr.length; i++) {
        arr[i] = 2;
    }
}

//Optimal Approach
function sortArray(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1; 
    while (mid <= high) { 
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
}
