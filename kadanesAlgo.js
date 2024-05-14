//Brute force
function maxSumSubArray(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER;
    for(let i = 0;  i < n; i++) {
        for(let j = i; j < n; j++) {
            let sum = 0;
            for(let k = i; k < j; k++) {
                sum += arr[k];
            }
            maxi = Math.max(maxi, sum);
        }
    }
    return maxi;
}

//Better Approach
function maxSumSubArray(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < n; i++) {
        let sum = 0; 
        for(let j = i; j < n; j++) {
            sum += arr[j]; 
            maxi = Math.max(maxi, sum);
        }
    }
    return maxi;
}

//Optimal Approach
function maxSubarraySum(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum += arr[i];
        if(sum > maxi) {
            maxi = sum;
        }
        if(sum < 0) {
            sum = 0;
        }
    }
    return maxi;

}

//Extra question
function maxSubarraySum(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
    let sum = 0;

    let start = 0;
    let ansStart = -1, ansEnd = -1;
    for (let i = 0; i < n; i++) {

        if (sum == 0) start = i; // starting index

        sum += arr[i];

        if (sum > maxi) {
            maxi = sum;

            ansStart = start;
            ansEnd = i;
        }

        // If sum < 0: discard the sum calculated
        if (sum < 0) {
            sum = 0;
        }
    }

    //printing the subarray:
    console.log("The subarray is: [");
    for (let i = ansStart; i <= ansEnd; i++) {
        console.log(arr[i] + " ");
    }
    console.log("]n");

    // To consider the sum of the empty subarray
    // uncomment the following check:

    //if (maxi < 0) maxi = 0;

    return maxi;
}
