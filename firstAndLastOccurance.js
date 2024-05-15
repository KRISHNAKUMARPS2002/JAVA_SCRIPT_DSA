//Brute Force Approach
function firstLast(arr, n, x) {
  let first = -1;
  let last = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] === x) {
      if (first === -1) {
        first = i;
      }
      last = i;
    }
  }
  return [first, last];
}
