//BruteForce Approach
function majorityElement(v) {
    let n = v.length;
    let ls = [];

    for(let i = 0; i < n; i++) {
        if(v.length === 0 || !ls.includes(v[i])) {
            let count = 0;
            for(let j = 0; j < n; j++) {
                if(v[i] === v[j]) {
                    count++;
                }
            }
            if(count > Math.floor(n / 3)) {
                ls.push(v[i]);
            }
        }
        if(ls.length === 2) break;
    }
    return ls;
}

//Better Approach
function majorityElement(v) {
    n = v.length;
    let ls = [];
    let mpp = new Map();

    let mini = Math.floor(n / 3) + 1;
    for(let i = 0; i < n; i++) {
        if(mpp.has(v[i])) {
            mpp.set(v[i], mpp.get(v[i]) + 1);
        } else {
            mpp.set(v[i], 1);
        }
        if(mpp.get(v[i]) === mini) {
            ls.push(v[i]);
        }
        if(ls.length === 2) break;
    }
    return ls;
}

//Optimal Approach
function majorityElement(v) {
    n = v.length;
    
    let count1 = 0, count2 = 0;
    let el1 = -Infinity;
    let el2 = -Infinity;

    for(let i = 0; i < n; i++) {
        if(count1 === 0 && el2 !== v[i]) {
            count1 = 1;
            el1 = v[i];
        } else if(count2 === 0 && el1 !== v[i]) {
            count2 = 1;
            el2 = v[i];
        } else if(v[i] === el1) count1++;
          else if(v[i] === el2) count2++;
          else {
            count1--, count2--;
          }
    }
    let ls = [];
    let cnt1 = 0, cnt2 = 0;
    for(let i = 0; i < n; i++) {
        if(v[i] === el1) cnt1++;
        if(v[i] === el2) cnt2++;
    }
    let mini = Math.floor(n / 3) + 1;
    if(cnt1 >= mini) ls.push(el1);
    if(cnt2 >= mini) ls.push(el2);
    return ls;
}