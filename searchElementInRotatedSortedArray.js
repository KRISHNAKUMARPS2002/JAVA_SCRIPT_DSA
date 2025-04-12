//BruteForce Approach
function search(arr, n, k) {
  for (let i = 0; i < n; i++) {
    if (arr[i] === k) return i;
  }
  return -1;
}

//Optimal BinarySearch Approach
function search(arr, n, k) {
  let low = 0,
    high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // if mid points to the target
    if (arr[mid] === k) return mid;

    // if left part is sorted
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= k && k <= arr[mid]) {
        // element exists
        high = mid - 1;
      } else {
        // element does not exist
        low = mid + 1;
      }
    } else {
      // if right part is sorted
      if (arr[mid] <= k && k <= arr[high]) {
        // element exists
        low = mid + 1;
      } else {
        // element does not exist
        high = mid - 1;
      }
    }
  }
  return -1;
}

//Search Element in Rotated Sorted Array II, which have duplicates
var search = function (nums, target) {
  let n = nums.length;
  let low = 0,
    high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // if mid points to the target
    if (nums[mid] === target) return true;

    if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
      low = low + 1;
      high = high - 1;
      continue;
    }

    // if left part is sorted
    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target <= nums[mid]) {
        // element exists
        high = mid - 1;
      } else {
        // element does not exist
        low = mid + 1;
      }
    } else {
      // if right part is sorted
      if (nums[mid] <= target && target <= nums[high]) {
        // element exists
        low = mid + 1;
      } else {
        // element does not exist
        high = mid - 1;
      }
    }
  }
  return false;
};
