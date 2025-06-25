// NUMBER HASHING
let arr = [1, 3, 2, 1, 3];
let queries = [1, 4, 2, 3, 12];
let hash = {};

for (let num of arr) {
  hash[num] = (hash[num] || 0) + 1;
}
for (let q of queries) {
  //console.log(`${q} : ${hash[q] || 0} times`);
}

//  Character Hashing (Only lowercase letters)
let str = "abcdabehf";
let charQueries = ["a", "g", "h", "b", "c"];
let smallHash = {};

for (let char of str) {
  let index = char.charCodeAt(0) - "a".charCodeAt(0);
  smallHash[index] = (smallHash[index] || 0) + 1;
}
for (let q of charQueries) {
  let index = q.charCodeAt(0) - "a".charCodeAt(0);
  //console.log(`${q} : ${smallHash[index] || 0} times`);
}

// Character Hashing (Uppercase + lowercase or any character)
let mixStr = "abcdabEfC";
let mixQueries = ["a", "E", "Z", "c"];
let mixHash = {};

for (let str of mixStr) {
  mixHash[str] = (mixHash[str] || 0) + 1;
}
for (let q of mixQueries) {
  //console.log(`${q} : ${mixHash[q] || 0} times`);
}

//  Given an array, count how many times each element occurs.
//  Solution 1: Using Two Loops (Brute Force)
//  Time Complexity: O(N^2)
//  Space Complexity: O(N) for visited[]
function countFrequencyBruteForce(arr) {
  let n = arr.length;
  let visited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    let count = 1;
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        visited[j] = true;
        count++;
      }
    }
    console.log(`${arr[i]} : ${count}`);
  }
}

let arr1 = [10, 5, 10, 15, 10, 5];
countFrequencyBruteForce(arr1);

//  Solution 2: Using Hash Map (Efficient)
//  Time Complexity: O(N)
//  Space Complexity: O(N)
function countFrequencyMap(arr2) {
  let map = {};

  for (let num of arr2) {
    map[num] = (map[num] || 0) + 1;
  }
  for (let key in map) {
    console.log(`${key} : ${map[key]}`);
  }
}

let arr2 = [10, 5, 10, 15, 10, 5];
countFrequencyMap(arr2);

//  The highest frequency (appears the most times) and The lowest frequency (appears the least times)
//  Solution 1: Brute Force Using Two Loops
//  Time Complexity: O(N^2)
//  Space Complexity: O(N) for visited[]
function findHighLowFrequencyBruteForce(arr3) {
  let n = arr3.length;
  let visited = new Array(n).fill(false);
  let maxFreq = 0,
    minFreq = Infinity;
  let maxElem = null,
    minElem = null;

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    let count = 1;
    for (let j = i + 1; j < n; j++) {
      if (arr3[i] === arr3[j]) {
        visited[j] = true;
        count++;
      }
    }

    if (count > maxFreq) {
      maxFreq = count;
      maxElem = arr3[i];
    }

    if (count < minFreq) {
      minFreq = count;
      minElem = arr3[i];
    }
  }

  console.log("The maximum repeated element is", maxElem);
  console.log("The maximum repeated time is", maxFreq);
  console.log("The minimum repeated element is", minElem);
  console.log("The minimum repeated time is", minFreq);
}

const arr3 = [10, 10, 15, 10, 5, 20, 25, 25, 20, 20, 30, 20];
findHighLowFrequencyBruteForce(arr3);

//  Optimized Using a Hash Map
//  Time Complexity: O(N)
//  Space Complexity: O(N)
function findHighLowFrequencyOptimized(arr4) {
  let freqMap = {};

  for (let num of arr4) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  let maxFreq = 0,
    minFreq = Infinity;
  let maxElem = null,
    minElem = null;

  for (let key in freqMap) {
    let freq = freqMap[key];
    let num = parseInt(key);

    if (freq > maxFreq) {
      maxFreq = freq;
      maxElem = num;
    }
    if (freq < minFreq) {
      minFreq = freq;
      minElem = num;
    }
  }
  console.log("The maximum repeated element is", maxElem);
  console.log("The maximum repeated time is", maxFreq);
  console.log("The minimum repeated element is", minElem);
  console.log("The minimum repeated time is", minFreq);
}

const arr4 = [10, 10, 15, 10, 5, 20, 25, 25, 20, 20, 30, 20];
findHighLowFrequencyOptimized(arr4);

// Version That Handles Ties (Multiple Max/Min Frequency Elements)
function findHighLowFrequencyWithTies(arr5) {
  let freqMap = {};

  for (let num of arr5) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  let maxFreq = 0;
  let minFreq = Infinity;

  for (let freq of Object.values(freqMap)) {
    if (freq > maxFreq) maxFreq = freq;
    if (freq < minFreq) minFreq = freq;
  }

  const maxElems = [];
  const minElems = [];

  for (let key in freqMap) {
    let freq = freqMap[key];
    let num = parseInt(key);

    if (freq === maxFreq) maxElems.push(num);
    if (freq === minFreq) minElems.push(num);
  }
  console.log("Elements with maximum frequency:", maxElems);
  console.log("Maximum frequency:", maxFreq);
  console.log("Elements with minimum frequency:", minElems);
  console.log("Minimum frequency:", minFreq);
}

const arr5 = [10, 10, 15, 10, 5, 20, 25, 25, 20, 20, 30, 20];
findHighLowFrequencyWithTies(arr5);
