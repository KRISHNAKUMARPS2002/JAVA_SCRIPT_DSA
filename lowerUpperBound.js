//Lower Bound
//BruteForce Approach
function lowerBound(arr, n, x) {
  for (let i = 0; i < n; i++) {
    if (arr[i] >= x) {
      // lower bound found:
      return i;
    }
  }
  return n;
}

//Optimal Approach with binary search
function lowerBound(arr, n, x) {
  let low = 0,
    high = n - 1;
  let ans = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // maybe an answer
    if (arr[mid] >= x) {
      ans = mid;
      // look for smaller index on the left
      high = mid - 1;
    } else {
      low = mid + 1; // look on the right
    }
  }
  return ans;
}

//Upper Bound
//Brute force Approach
function upperBound(arr, x, n) {
  let low = 0,
    high = n - 1;
  let ans = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // maybe an answer
    if (arr[mid] > x) {
      ans = mid;
      //look for smaller index on the left
      high = mid - 1;
    } else {
      low = mid + 1; // look on the right
    }
  }
  return ans;
}
