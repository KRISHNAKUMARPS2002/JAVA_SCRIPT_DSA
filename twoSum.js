//BrutForce Approach to get Yes or No
function twoSum(arr, n, target) {
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            if(arr[i] + arr[j] === target) return "Yes";
        }
    }
    return "No";
}

//BrutForce Approach to get index's
function twoSum(arr, n, target) {
    const ans = [-1, -1];
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            if(arr[i] + arr[j] === target) {
                ans[0] = i;
                ans[1] = j;
                return ans;
            }
        }
    }
    return ans;
}

//Better approach using hashing to get Yes or No
function twoSum(n, arr, target) {
    const mpp = new Map();
    for (let i = 0; i < n; i++) {
        const num = arr[i];
        const moreNeeded = target - num;
        if (mpp.has(moreNeeded)) {
            return 'YES';
        }

        mpp.set(num, i);
    }
    return 'NO';
}

//Better approach using hashing to get index's
function twoSum(n, arr, target) {
    const ans = [-1, -1];
    const mpp = new Map();
    for (let i = 0; i < n; i++) {
        const num = arr[i];
        const moreNeeded = target - num;
        if (mpp.has(moreNeeded)) {
            ans[0] = mpp.get(moreNeeded);
            ans[1] = i;
            return ans;
        }

        mpp.set(num, i);
    }
    return ans;
}

//Two pointer method
function twoSum(n, arr, target) {
    arr.sort((a, b) => a - b);
    let left = 0, right = n - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return 'YES';
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return 'NO';
}