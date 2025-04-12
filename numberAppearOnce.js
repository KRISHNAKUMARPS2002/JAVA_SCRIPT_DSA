//Naive Approach(Brute-force approach):
function getSingleElement(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n; i++) {
      const num = arr[i]; // selected element
      let cnt = 0;
  
      for (let j = 0; j < n; j++) {
        if (arr[j] === num) {
          cnt++;
        }
      } if (cnt === 1) {
        return num;
      }
    }
  }

//Better Approach(Using Hashing):
function appearOnce(arr) {
    let n = arr.lenghth;
    let maxi = arr[0];
    for(let i = 0; i < n; i++) {
        maxi = Math.max(maxi, arr[i]);
    }
    let hashArray = new Array(maxi + 1).fill(0);
    for(let i = 0; i < n; i++) {
        hashArray[arr[i]]++;
    }
    for(let i = 0; i < n; i++) {
        if(hashArray[i] === 1) {
            return arr[i];
        }
    }
} 

//Hashing using the map data structure: 
function getSingleElement(arr) {
    const n = arr.length;
    let hashmap = new Map();
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        hashmap.set(num, (hashmap.get(num) || 0) + 1);  
    }
    for(const [num, count] of hashmap) {
        if(count === 1) {
            return num;
        }
    }
}

//Optimal Aproach
function getSingleElement(arr) {
    // XOR all the elements:
    let xorr = 0;
    for (let i = 0; i < arr.length; i++) {
        xorr = xorr ^ arr[i];
    }
    return xorr;
}