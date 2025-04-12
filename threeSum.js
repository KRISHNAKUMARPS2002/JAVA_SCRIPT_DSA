//Brute force approach
function triplet(n, arr) {
    let ans = [];
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            for(let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    let temp = [arr[i], arr[j], arr[k]];
                    temp.sort((a, b) => a - b);
                    ans.push(temp);
                }
            }
        }
    }
    let set = new Set(ans.map(JSON.stringify));
    ans = Array.from(set).map(JSON.parse);
    return ans;
}
//Better Approach
function triplet(n, arr) {
    let ans = [];
    for(let i = 0; i < n; i++) {
        let hashSet = new Set();
        for(let j = i + 1; j < n; j++) {
            let third = -(arr[i] + arr[j]);
            if(hashSet.has(third)) {
                let temp = [arr[i], arr[j], third];
                temp.sort((a, b) => a - b);
                ans.push(temp);  
            }
            hashSet.add(arr[j]);
        }
    }
    let set = new Set(ans.map(JSON.stringify));
    ans = Array.from(set).map(JSON.parse);
    return ans;
}
//Optimal Approach
function triplet(arr, n) {
    let ans = [];
    arr.sort((a, b) => a - b);
    for(let i = 0; i < n; i++) {
        if(i !== 0 && arr[i] !== arr[i - 1]) continue;

        let j = i + 1;
        let k = n - 1;
        while(j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            if(sum < 0) {
                j++;
            } else if(sum > 0) {
                k--;
            } else {
                let temp = [arr[i], arr[j], arr[k]];
                ans.push(temp);
                j++;
                k--;

                while(j < k && arr[j] !== arr[j - 1]) j++;
                while(j < k && arr[k] !== arr[k + 1]) k--;
            }
        }
    }
    return ans;
}