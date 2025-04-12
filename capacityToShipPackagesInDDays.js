//Brute force Approach
function findDays(weights, cap) {
  let days = 1; // First day.
  let load = 0;
  let n = weights.length; // Size of array.

  for (let i = 0; i < n; i++) {
    if (load + weights[i] > cap) {
      days += 1; // Move to next day.
      load = weights[i]; // Load the weight.
    } else {
      // Load the weight on the same day.
      load += weights[i];
    }
  }
  return days;
}

function leastWeightCapacity(weights, d) {
  // Find the maximum and the summation:
  let maxi = Math.max(...weights);
  let sum = weights.reduce((acc, weight) => acc + weight, 0);

  for (let i = maxi; i <= sum; i++) {
    if (findDays(weights, i) <= d) {
      return i;
    }
  }
  // Dummy return statement:
  return -1;
}

//Optimal Approach
function findDays(weights, cap) {
  let days = 1; // First day.
  let load = 0;
  let n = weights.length; // size of array.
  for (let i = 0; i < n; i++) {
    if (load + weights[i] > cap) {
      days += 1; // move to next day.
      load = weights[i]; // load the weight.
    } else {
      // load the weight on the same day.
      load += weights[i];
    }
  }
  return days;
}

function leastWeightCapacity(weights, d) {
  // Find the maximum and the summation:
  let low = Math.max(...weights);
  let high = weights.reduce((sum, weight) => sum + weight, 0);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let numberOfDays = findDays(weights, mid);
    if (numberOfDays <= d) {
      // eliminate right half.
      high = mid - 1;
    } else {
      // eliminate left half.
      low = mid + 1;
    }
  }
  return low;
}
