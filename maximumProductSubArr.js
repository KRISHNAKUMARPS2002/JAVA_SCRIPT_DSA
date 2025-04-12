//Brute Force Approach
function maxProductSubArray(nums) {
    let result = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let prod = 1;
            for (let k = i; k <= j; k++) {
                prod *= nums[k];
            }
            result = Math.max(result, prod);
        }
    }
    return result;
}
//Better Approach
function maxProductSubArray(nums) {
    let maxi = -Infinity; 
    
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = i; j < nums.length; j++) {
            product *= nums[j];
            maxi = Math.max(product, maxi); 
        }
    }    
    return maxi;
}
//Optimal Approach
function maxProductSubArray(arr) {
    let n = arr.length; // size of array.

    let pre = 1, suff = 1;
    let ans = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (pre === 0) pre = 1;
        if (suff === 0) suff = 1;
        pre *= arr[i];
        suff *= arr[n - i - 1];
        ans = Math.max(ans, Math.max(pre, suff));
    }
    return ans;
}
