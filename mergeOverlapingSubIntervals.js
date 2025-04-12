//Brute Force Approach
function mergeSubIntervals(arr) {
    let n = arr.length;
    arr.sort((a, b) => a[0] - b[0]);
    let ans = [];

    for(let i = 0; i < n; i++) {
        let start = arr[i][0];
        let end = arr[i][1];

        if (arr.length && end <= arr[arr.length - 1][1]) {
            continue;
        }

        for(let j = i + 1; j < n; j++) {
            if (arr[j][0] <= end) {
               end = Math.max(end, arr[j][1]);
            } else {
                break;
            }
        }
        ans.push([start, end]);
    }
    return ans;
}
//Optimal Approach
function mergeOverlappingIntervals(arr) {
    const n = arr.length;
    
    // sort the given intervals
    arr.sort((a, b) => a[0] - b[0]);
    
    const ans = [arr[0]];
    
    for (let i = 1; i < n; i++) {
      const last = ans[ans.length - 1];
      const curr = arr[i];
      
      // if the current interval overlaps with the last interval
      if (curr[0] <= last[1]) {
        last[1] = Math.max(last[1], curr[1]);
      }
      // if the current interval does not overlap with the last interval
      else {
        ans.push(curr);
      }
    }
    
    return ans;
  }