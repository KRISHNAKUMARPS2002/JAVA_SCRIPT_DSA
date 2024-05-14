//Selection Sort
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}


// Bubble sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}


// Insertion Sort
function insertionSort(arr) {
    let n = arr.length;
    for(let i = 0; i <= n -1; i++) {
        let j = i;
        while(j > 0 && arr[j - 1] > arr[j]) {
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
}

//Merge Sort
function mergeSort(arr) {
    if(arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
    const sortedArr = [];
    while(leftArr.length && rightArr.length) {
        if(leftArr[0] < rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr,...leftArr, ...rightArr];
}

//Quick sort
function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}


// const arr = [8, 5, 4, -2, 5, 11, 1];
// console.log(quickSort(arr));

var check = function(nums) {
    // Create a sorted copy of the input array
    let sortedNums = nums.slice().sort((a, b) => a - b);

    // Helper function to check if two arrays are equal
    function isEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }

    // Loop through possible rotations
    for (let i = 0; i < nums.length; i++) {
        if (isEqual(nums, sortedNums)) {
            return true; // Found a sorted rotation
        }
        nums.unshift(nums.pop()); // Rotate the array
    }
    return false; // No sorted rotation found
};
