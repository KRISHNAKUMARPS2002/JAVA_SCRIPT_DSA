//Floor
function findFloor(arr, n, x) {
  let low = 0,
    high = n - 1;
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // maybe an answer
    if (arr[mid] <= x) {
      ans = arr[mid];
      //look for smaller index on the left
      low = mid + 1;
    } else {
      high = mid - 1; // look on the right
    }
  }
  return ans;
}

//Ceil
function findCeil(arr, n, x) {
  let low = 0,
    high = n - 1;
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // maybe an answer
    if (arr[mid] >= x) {
      ans = arr[mid];
      //look for smaller index on the left
      high = mid - 1;
    } else {
      low = mid + 1; // look on the right
    }
  }
  return ans;
}
