// Brute Force Approach

function secondLarg(arr) {
    const uniqueArr = Array.from(new Set(arr)); // O(n)

    uniqueArr.sort((a, b) => {
        return b -a;
    });

    if(uniqueArr.length >= 2) {
        return uniqueArr[1];
    } else {
        return -1;
    }
}

console.log(secondLarg([10, 15, 46, 67, 89,]));
// Time Complexity -> O(nlogn);


// Optimised Approach
function secondLargOptimized(arr) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] != largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

console.log(secondLargOptimized([10, 15, 46, 67, 89,]));

// Time Complexity -> O(n);
// Space Complexity -> O(1);