//Brute Force Approach
function leader(arr) {
    let ans = [];
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        let leader = true;
        for(let j  = i + 1; j < n; j++) {
            if(arr[j] > arr[i]) {
                leader = false;
                break;
            }
        }
        if(leader === true) {
            ans.push(arr[i]);
        }
    }
    return ans;
}

//Optimal Approach
function printLeaders(arr, n) {

    let ans = [];
    let max = arr[n - 1];
    ans.push(arr[n - 1]);
  
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] > max) {
        ans.push(arr[i]);
        max = arr[i];
      }
    }
  
    return ans;
  }
