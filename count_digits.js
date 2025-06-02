// COUNT DIGITS - Brute Force Approach - Time Complexity: O(log10N + 1)
function count(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    ++count;
  }
  return count;
}

console.log(count(132978892798987));

//  COUNT DIGITS - Optimal Approach - Time Complexity: log10 N + 1
function counts(n) {
  let count = Math.floor(Math.log10(n) + 1);

  return count;
}

console.log(counts(367383993833839));
