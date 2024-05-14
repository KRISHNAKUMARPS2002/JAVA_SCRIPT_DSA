//Brute force Approach
function solve(a) {
    let maxx = 0;
    for (let i = 0; i < a.length; i++) {
        let sum = 0;
        for (let j = i; j < a.length; j++) {
            sum += a[j];
            if (sum === 0) {
                maxx = Math.max(maxx, j - i + 1);
            }
        }
    }
    return maxx;
}
//Optimal Approach
function solve(a) {
    let maxLen = 0;
    let sumIndexMap = new Map();
    let sum = 0;
  
    for (let i = 0; i < a.length; i++) {
      sum += a[i];
  
      if (sum === 0) {
        maxLen = i + 1;
      } else if (sumIndexMap.has(sum)) {
        maxLen = Math.max(maxLen, i - sumIndexMap.get(sum));
      } else {
        sumIndexMap.set(sum, i);
      }
    }
  
    return maxLen;
  }