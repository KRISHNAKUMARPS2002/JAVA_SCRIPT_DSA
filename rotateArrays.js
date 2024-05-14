// Brute Force Approach

function rotateArray(nums, k) {
    let size = nums.length;

    if(size > k) {
        k = k % size;
    }

    const rotated = nums.splice(size - k, size);
    nums.unshift(...rotated);
    return nums;
}

// Time Complexity - O(n)
//console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

// Optimised Approach

function rotateArrayOptimized(nums, k) {
    let size = nums.length;

    if(size > k) {
        k = k % size;
    }
    reverse(nums, 0, nums.length-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length -1);

    return nums;
}

function reverse(nums, left, right) {
    while(left < right) {
        const temp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = temp;
    }
}

console.log(rotateArrayOptimized([-1, -100, 3, 99], 2));

// Time Complexity -> O(n)
// Space Complexity -> O(1)