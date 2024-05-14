// With JS Methods

function removeDuplicates(nums) {
    for(let i =0; i < nums.length - 1; i++) {
        if(nums[i] === nums[i+1]) {
            nums.splice(i+1, 1);
            i--;
        }
    }
    return nums.length;
}

// Time Complexity - O(n)
// Space Complexity - O(1)
console.log(removeDuplicates([1, 1, 2]));

// Without JS Methods - Two pointer Approach

function removeDuplicatesNew(nums) {
    if(nums.length === 0) return 0;
    let i = 0;

    for(let j = 1; j < nums.length; j++) {
        if(nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

// Time Complexity - O(n)
// Space Complexity - O(1)
console.log(removeDuplicatesNew([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));