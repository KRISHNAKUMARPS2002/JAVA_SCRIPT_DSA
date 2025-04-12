//Brute Forcec Approach
function findMax(v) {
  let maxi = -Infinity;
  let n = v.length;
  // Find the maximum
  for (let i = 0; i < n; i++) {
    maxi = Math.max(maxi, v[i]);
  }
  return maxi;
}

function calculateTotalHours(v, hourly) {
  let totalH = 0;
  let n = v.length;
  // Find total hours
  for (let i = 0; i < n; i++) {
    totalH += Math.ceil(v[i] / hourly);
  }
  return totalH;
}

function minimumRateToEatBananas(v, h) {
  // Find the maximum number
  let maxi = findMax(v);

  // Find the minimum value of k
  for (let i = 1; i <= maxi; i++) {
    let reqTime = calculateTotalHours(v, i);
    if (reqTime <= h) {
      return i;
    }
  }

  // Dummy return statement
  return maxi;
}

//////////////////////////////////
//Optimal Approach
function findMax(v) {
  let maxi = -Infinity;
  let n = v.length;
  // Find the maximum
  for (let i = 0; i < n; i++) {
    maxi = Math.max(maxi, v[i]);
  }
  return maxi;
}

function calculateTotalHours(v, hourly) {
  let totalH = 0;
  let n = v.length;
  // Find total hours
  for (let i = 0; i < n; i++) {
    totalH += Math.ceil(v[i] / hourly);
  }
  return totalH;
}

function minimumRateToEatBananas(v, h) {
  let low = 1;
  let high = findMax(v);

  // Apply binary search
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let totalH = calculateTotalHours(v, mid);
    if (totalH <= h) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}
