//Brute Force Approach
function floorSqrt(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    let val = i * i;
    if (val <= n) {
      ans = i;
    } else {
      break;
    }
  }
  return ans;
}

//Built in function
function floorSqrt(n) {
  let ans = Math.floor(Math.sqrt(n));
  return ans;
}

//Optimal Approach
function floorSqrt(n) {
  let low = 1;
  let high = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let val = mid * mid;
    if (val <= n) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
}
