//Optimal Approach
function findAllSubarraysWithGivenSum(arr, k) {
    let n = arr.length;
    let mpp = new Map();
    let preSum = 0;
    let count = 0;

    mpp.set(0, 1);
    for(let i = 0; i < n; i++) {
        preSum += arr[i];

        let remove = preSum - k;

        count += mpp.get(remove) || 0;

        mpp.set(preSum, (mpp.get(preSum) || 0) + 1);
    }
    return count;
}