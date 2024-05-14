function subSet(arr, n, p) {
    for(let i=0; i<n; i++) {
        if(arr[i] < n) {
            arr[arr[i] - 1]++;
        }
        for(let i=0; i<n; i++) {
            arr[i] = arr[i] - 1;
        }
    }
}