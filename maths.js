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

// Reverse Digits of A Number
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

// Find GCD of two numbers
// Brute Force Approach – Time: O(min(n1, n2))
function findGcdBrute(n1, n2) {
  let gcd = 1;
  for (let i = 1; i <= Math.min(n1, n2); i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

console.log(findGcdBrute(20, 100));

// Better Approach – Time: O(min(n1, n2))
function findGcdBetter(n1, n2) {
  for (let i = Math.min(n1, n2); i >= 1; i--) {
    if (n1 % i === 0 && n2 % i === 0) {
      return i;
    }
  }
  return 1;
}

console.log(findGcdBetter(1000, 100));

// Optimal Approach – Euclidean Algorithm – Time: O(log(min(n1, n2)))
function findGcdOptimal(n1, n2) {
  while (n1 > 0 && n2 > 0) {
    if (n1 > n2) {
      n1 = n1 % n2;
    } else {
      n2 = n2 % n1;
    }
  }
  return n1 === 0 ? n2 : n1;
}

console.log(findGcdOptimal(1000, 100));

// Armstrong Number (O(log₁₀N + 1))
function isArmstrong(num) {
  const power = num.toString().length;
  let total = 0;
  let n = num;

  while (n > 0) {
    const ld = n % 10;
    total += Math.pow(ld, power);
    n = Math.floor(n / 10);
  }
  return total === num;
}

console.log(isArmstrong(152));

// Print All Divisors
// Print All Divisors – Brute Force (O(N))
function printDivisorsBrut(n) {
  let divisors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}
console.log(printDivisorsBrut(10));

// Print All Divisors – Optimal (O(√N))
function printDivisorsOptimal(n) {
  let divisors = new Set();
  let sqrt = Math.floor(Math.sqrt(n));

  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
      divisors.add(i);
      divisors.add(n / i);
    }
  }

  return Array.from(divisors).sort((a, b) => a - b);
}

console.log(printDivisorsOptimal(10));

// Check Prime
// Check Prime – Brute Force (O(N))
function checkPrimeBrute(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count += 1;
    }
  }
  return count === 2;
}
console.log(checkPrimeBrute(10));

// Check Prime – Optimal (O(√N))
function checkPrimeOptimal(n) {
  if (n < 2) return false;

  let count = 0;
  let sqrt = Math.floor(Math.sqrt(n));

  for (let i = 0; i < sqrt; i++) {
    if (n % i === 0) {
      count++;
      if (n / i != i) {
        count++;
      }
    }
  }
  return count === 2;
}

console.log(checkPrimeOptimal(11));
