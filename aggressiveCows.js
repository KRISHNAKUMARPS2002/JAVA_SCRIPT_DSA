//Brute Force Approach
function canWePlace(stalls, dist, cows) {
  let n = stalls.length;
  let countCows = 1;
  let last = stalls[0];

  for (let i = 1; i < n; i++) {
    if (stalls[i] - last >= dist) {
      countCows++;
      last = stalls[i];
    }
    if (countCows >= cows) return true;
  }
  return false;
}

function aggressiveCows(stalls, k) {
  let n = stalls.length;

  stalls.sort((a, b) => a - b);

  let limit = stalls[n - 1] - stalls[0];
  for (let i = 1; i <= limit; i++) {
    if (canWePlace(stalls, i, k) === false) {
      return i - 1;
    }
  }
  return limit;
}

//Optimal Approach
function canWePlace(stalls, dist, cows) {
  let n = stalls.length;
  let countCows = 1;
  let last = stalls[0];

  for (let i = 1; i < n; i++) {
    if (stalls[i] - last >= dist) {
      countCows++;
      last = stalls[i];
    }
    if (countCows >= cows) return true;
  }
  return false;
}

function aggressiveCows(stalls, k) {
  let n = stalls.length;
  stalls.sort((a, b) => a - b);

  let low = 1;
  let high = stalls[n - 1] - stalls[0];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (canWePlace(stalls, mid, k)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
}
