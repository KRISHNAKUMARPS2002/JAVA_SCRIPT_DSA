// COUNT DIGITS - Brute Force Approach - Time Complexity: O(log10N + 1)
function countDigits(n) {
  count = 0;
  while (n > 0) {
    count += 1;
    n = Math.floor(n / 10);
  }
  return count;
}

counts = countDigits(242);
console.log(counts);

// COUNT DIGITS - Optimal Approach - Time Complexity: log10 N + 1
function countDigitsOptimal(n) {
  count = 0;
  if (n === 0) return 1;
  return Math.floor(Math.log10(Math.abs(n)) + 1);
}

countz = countDigitsOptimal(45748573987538538957398);
console.log(countz);

// Reverse Digits of A Number Brute
function reverse(n) {
  revNum = 0;

  while (n > 0) {
    ld = n % 10;
    revNum = revNum * 10 + ld;
    n = Math.floor(n / 10);
  }
  return revNum;
}

console.log(reverse(112));

// Check if a number is Palindrome or Not
function isPalindrome(n) {
  revNum = 0;
  dup = n;

  while (n > 0) {
    ld = n % 10;
    revNum = revNum * 10 + ld;
    n = Math.floor(n / 10);
  }

  if (revNum === dup) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(112));
