// NUMBER HASHING
let arr = [1, 3, 2, 1, 3];
let queries = [1, 4, 2, 3, 12];
let hash = {};

for (let num of arr) {
  hash[num] = (hash[num] || 0) + 1;
}
for (let q of queries) {
  console.log(hash[q] || 0);
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
  //console.log(smallHash[index] || 0);
}

// Character Hashing (Uppercase + lowercase or any character)
let mixStr = "abcdabEfC";
let mixQueries = ["a", "E", "Z", "c"];
let mixHash = {};

for (let str of mixStr) {
  mixHash[str] = (mixHash[str] || 0) + 1;
}
for (let q of mixQueries) {
  console.log(mixHash[q] || 0);
}
