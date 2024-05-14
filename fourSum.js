//Brute Force Approach
function fourSum(arr, n, target) {
    let set = new Set();
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            for(let k = j + 1; k < n; k++) {
                for(let l = k + 1; l < n; l++) { 
                    let sum = arr[i] + arr[j] + arr[k] + arr[l];
                    if(sum === target) {
                        let temp = [arr[i], arr[j], arr[k], arr[l]];
                        temp.sort((a, b) => a - b);
                        set.add(temp); 
                    }
                }
            }
        }
    }
    let ans = Array.from(set);
    return ans;
}
//Better Approach
function fourSum(arr, target) {
    let n = arr.length;
    let set = new Set();
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            let hashSet = new Set(); 
            for(let k = j + 1; k < n; k++) { 
                let sum = arr[i] + arr[j] + arr[k];
                let fourth = target - sum;
                
                if(hashSet.has(fourth)) {
                    let temp = [arr[i], arr[j], arr[k], fourth];
                    temp.sort((a, b) => a - b);
                    set.add(temp); 
                }
                hashSet.add(arr[k]); 
            }
        }
    }
    let ans = Array.from(set);
    return ans;
}
//Optimal Approach
function fourSum(arr, target) {
    let n = arr.length;
    let ans = [];

    arr.sort((a, b) => a - b);
    for(let i = 0; i < n; i++) {
        if(i > 0 && arr[i] === arr[i - 1]) continue;
        for(let j = i + 1; j < n; j++) {
            if(j > i + 1 && arr[j] === arr[j - 1]) continue;

            let k = j + 1;
            let l = n - 1;
            while(k < l) {
                let sum = arr[i] + arr[j] + arr[k] + arr[l];
                if(target === sum) {
                    const temp = [arr[i], arr[j], arr[k], arr[l]];
                    ans.push(temp);
                    k++;
                    l--;
                    while(k < l && arr[k] === arr[k - 1]) k++;
                    while(k < l && arr[l] === arr[l + 1]) l--;
                } else if(sum < target) {
                    k++;
                } else {
                    l--;
                }
            }
        }
    }
    return ans;
}


