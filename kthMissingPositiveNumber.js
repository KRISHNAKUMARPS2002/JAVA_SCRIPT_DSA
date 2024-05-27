//Brute Force Approach
function missingK(vec, n, k) {
  for (let i = 0; i < n; i++) {
    if (vec[i] <= k) k++;
    else break;
  }
  return k;
}
//Optimal Approach
function missingK(vec, n, k) {
  let low = 0,
    high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let missing = vec[mid] - (mid + 1);
    if (missing < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return k + high + 1;
}
