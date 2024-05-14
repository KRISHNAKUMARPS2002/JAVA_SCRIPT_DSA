//BruteForceApproach
function buyStock(arr) {
    let maxProfit = 0;
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[i]) {
                maxProfit = Math.max(arr[j] - arr[i], maxProfit);
            }
        }
    }

    return maxProfit;
}

//Optimal Approach
function maxProfit(arr) {
    let n = arr.length;

    let maxProfit = 0;
    let minPrice = Infinity;
    for(let i = 0; i < n; i++) {
        minPrice = Math.min(arr[i], minPrice);
        maxProfit = Math.max(arr[i] - minPrice, maxProfit);
    }
    return maxProfit;
}

//////////////////////////////////////
function maxProfit(arr) {
    let n = arr.length;

    let maxProfit = 0;
    let minPrice = Infinity;
    for(let i = 0; i < n; i++) {
        minPrice = Math.min(arr[i], minPrice);
        maxProfit = Math.max(arr[i] - minPrice, maxProfit);
    }
    return [maxProfit, minPrice];
}

const arr1 = [7, 1, 5, 3, 6, 4];
const [maxPro, minPri] = maxProfit(arr);
console.log("Max profit is:", maxPro);
console.log("Min price is:", minPri);

//////////////////////////////////////
function maxProfit(arr) {
    let n = arr.length;

    let maxProfit = 0;
    let minPrice = Infinity;
    for(let i = 0; i < n; i++) {
        minPrice = Math.min(arr[i], minPrice);
        maxProfit = Math.max(arr[i] - minPrice, maxProfit);
    }
    return { maxProfit, minPrice };
}

const arr = [7, 1, 5, 3, 6, 4];
const result = maxProfit(arr);
console.log("Max profit is:", result.maxProfit);
console.log("Min price is:", result.minPrice);

