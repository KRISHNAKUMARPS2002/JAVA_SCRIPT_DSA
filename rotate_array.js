//Clock wise rotation of Array by one.

function rotate(arr, N) {
    let lastElement = arr[N - 1];
    for(let i=N-1; i>0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = lastElement;
}

//Rotate array K times

function rotateManyTimes(Arr, N, K) {
    console.log("Original Array:", Arr);
    let temp = Arr.slice(0, K);
    for (let i = K; i < N; i++) {
        Arr[i - K] = Arr[i];

    }
    for (let i = 0; i < K; i++) {
        Arr[N - K + i] = temp[i];
    }
    console.log("Rotated Array:", Arr);
}

const inputArray = [1, 2, 3, 4, 5];
const N = inputArray.length;
const K = 2;

rotateManyTimes(inputArray, N, K);
