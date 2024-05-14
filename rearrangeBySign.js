//BruteForceApproach
function RearrangebySign(A, n) {
    let pos = [];
    let neg = [];

    for(let i = 0; i < n; i++) {
        if(A[i] > 0) {
           pos.push(A[i]); 
        } else {
            neg.push(A[i]);
        }
    }
    for(let i = 0; i < n / 2; i++) {
        A[2 * i] = pos;
        A[2 * i + 1] = neg;
    }
    return A;
}

//Optimal Approach
function RearrangebySign(A) {
    let n = A.length;
    let ans = new Array(n).fill(0);
  
    let posIndex = 0, negIndex = 1;
    for (let i = 0; i < n; i++) {
  
      if (A[i] < 0) {
        ans[negIndex] = A[i];
        negIndex += 2;
      }  
      else {
        ans[posIndex] = A[i];
        posIndex += 2;
      }
    }
  
    return ans;
  }

//There’s an array ‘A’ of size ‘N’ with positive and negative elements (not necessarily equal).
function RearrangebySign(A) {    
  let n = A.length;
  let pos = [];
  let neg = [];
  for(let i = 0; i < n; i++) {
      if(A[i] > 0) pos.push(A[i]);
      else neg.push(A[i]);
  }
  if(pos.length < neg.length) {
    for(let i = 0; i < pos.length; i++) {
        A[2 * i] = pos[i];
        A[2 * i + 1] = neg[i]; 
      }
      let index = pos.length * 2;
      for(let i = pos.length; i < neg.length; i++) {
        A[index] = neg[i];
        index++;
      }
  } else {
    for(let i = 0; i < neg.length; i++) {
      A[2 * i] = pos[i];
      A[2 * i + 1] = neg[i]; 
    }
    let index = neg.length * 2;
    for(let i = neg.length; i < pos.length; i++) {
      A[index] = pos[i];
      index++;
    }
  }
  return A;
}


  