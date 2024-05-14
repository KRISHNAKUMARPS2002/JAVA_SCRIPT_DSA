// Brute Force Approach
function missingNumber(a, N) {
    // Outer loop that runs from 1 to N:
    for (let i = 1; i <= N; i++) {
      // flag variable to check if an element exists
      let flag = 0;
  
      // Search the element using linear search:
      for (let j = 0; j < N - 1; j++) {
        if (a[j] === i) {
          // i is present in the array:
          flag = 1;
          break;
        }
      }
  
      // check if the element is missing (i.e., flag === 0):
      if (flag === 0) {
        return i;
      }
    }
  }


//Better Approach (using Hashing):
function missingNumber(a, N) {
    const hash = new Array(N + 1).fill(0); // hash array
  
    // storing the frequencies:
    for (let i = 0; i < N - 1; i++) {
      hash[a[i]]++;
    }
  
    // checking the frequencies for numbers 1 to N:
    for (let i = 1; i <= N; i++) {
      if (hash[i] === 0) {
        return i;
      }
    }  
}

// OPtimal Approach
function missingNumber(a, N) {
    // Summation of first N numbers:
    const summation = (N * (N + 1)) / 2;
  
    // Summation of all array elements:
    let s2 = 0;
    for (let i = 0; i < N - 1; i++) {
      s2 += a[i];
    }
  
    const missingNum = summation - s2;
    return missingNum;
  }
  