//Brute Force Approach
function func(b, exp) {
  let ans = 1;
  let base = b;
  while (exp > 0) {
    if (exp % 2) {
      exp--;
      ans = ans * base;
    } else {
      exp /= 2;
      base = base * base;
    }
  }
  return ans;
}

function NthRoot(n, m) {
  // Use linear search on the answer space:
  for (let i = 1; i <= m; i++) {
    let val = func(i, n);
    if (val === m) return i;
    else if (val > m) break;
  }
  return -1;
}
//Optimal Approach
function func(mid, n, m) {
c
}

function NthRoot(n, m) {
  let low = 1,
    high = m;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midN = func(mid, n, m);
    if (midN === 1) {
      return mid;
    } else if (midN === 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
