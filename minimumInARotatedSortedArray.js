//Brute Force Approach
function findMin(arr) {
  let mini = Infinity;
  for (let i = 0; i < arr.length; i++) {
    mini = Math.min(mini, arr[i]);
  }
  return mini;
}
//Optimal Approach
function findMin(arr) {
  let low = 0,
    high = arr.length - 1;
  let ans = Infinity;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // If left part is sorted:
    if (arr[low] <= arr[mid]) {
      // Keep the minimum:
      ans = Math.min(ans, arr[low]);

      // Eliminate left half:
      low = mid + 1;
    } else {
      // If right part is sorted:
      // Keep the minimum:
      ans = Math.min(ans, arr[mid]);

      // Eliminate right half:
      high = mid - 1;
    }
  }
  return ans;
}
//Find How Many Times the array is Rotated
//Brute Force Approach
function findRoatated(nums) {
  let n = nums.length;
  let ans = Infinity,
    index = -1;
  for (let i = 0; i < n; i++) {
    ans = Math.min(ans, nums[i]);
    index = i;
  }
  return index;
}
//Optimal Approach
function findRotated(nums) {
  let n = nums.length;
  let low = 0;
  let high = n - 1;
  let ans = Infinity;
  let index = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[low] <= nums[mid]) {
      ans = Math.min(ans, nums[low]);
      low = mid + 1;
      index = low;
    } else {
      ans = Math.min(ans, nums[mid]);
      high = mid - 1;
      index = mid;
    }
  }
  return index;
}
