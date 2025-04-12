//Iterative Approach
function binarySearch(nums, target) {
  let n = nums.length; // size of the array
  let low = 0,
    high = n - 1;

  // Perform the steps:
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (target > nums[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

//Recursive Approach
function binarySearch(nums, low, high, target) {
  if (low > high) return -1; // Base case.

  // Perform the steps:
  let mid = Math.floor((low + high) / 2);
  if (nums[mid] === target) return mid;
  else if (target > nums[mid]) return binarySearch(nums, mid + 1, high, target);
  return binarySearch(nums, low, mid - 1, target);
}

function search(nums, target) {
  return binarySearch(nums, 0, nums.length - 1, target);
}
