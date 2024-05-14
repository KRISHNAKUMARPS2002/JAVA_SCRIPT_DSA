//Bruteforce 
function subarraysWithXorK(a, k) {
    const n = a.length;
    let cnt = 0;

    // Step 1: Generating subarrays:
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {

            // Step 2: calculate XOR of all elements:
            let xorr = 0;
            for (let K = i; K <= j; K++) {
                xorr = xorr ^ a[K];
            }

            // Step 3: check XOR and count:
            if (xorr === k) cnt++;
        }
    }
    return cnt;
}
//Better Approach
function subarraysWithXorK(a, k) {
    const n = a.length; //size of the given array.
    let xr = 0;
    const mpp = new Map(); //declaring the map.
    mpp.set(xr, 1); //setting the value of 0.
    let cnt = 0;
  
    for (let i = 0; i < n; i++) {

        xr = xr ^ a[i];
  
      const x = xr ^ k;
  
      cnt += mpp.get(x) || 0;

      mpp.set(xr, (mpp.get(xr) || 0) + 1);
    }
    return cnt;
}