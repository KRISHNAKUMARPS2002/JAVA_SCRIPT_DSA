// ✅ 1. Print Name N times using Recursion (Forward Recursion - Top to Bottom)
// Time Complexity: O(N)
function printNameNTimes(i, n) {
  if (i > n) return;
  console.log("KRISHNA");
  printNameNTimes(i + 1, n);
}
printNameNTimes(1, 10);

// ✅ 2. Print 1 to N using Forward Recursion
// Time Complexity: O(N)
function print1toN(i, n) {
  if (i > n) return;
  console.log(i); // Print before the recursive call (Top to Bottom)
  print1toN(i + 1, n);
}
print1toN(1, 5);

// ✅ 3. Print 1 to N using Backward Recursion (Backtracking)
// Time Complexity: O(N)
function print1toN_Backtracking(n) {
  if (n < 1) return;
  print1toN_Backtracking(n - 1); // First go down (Bottom to Top)
  console.log(n); // Then print on return
}
print1toN_Backtracking(5);

// ✅ 4. Print N to 1 using Forward Recursion (Top to Bottom)
// Time Complexity: O(N)
function printNto1(n) {
  if (n < 1) return;
  console.log(n); // Print before recursive call
  printNto1(n - 1);
}
printNto1(5);

// ✅ 5. Print N to 1 using Backward Recursion with Index Logic
// Time Complexity: O(N)
function printNto1_Backtracking(i, n) {
  if (i > n) return;
  printNto1_Backtracking(i + 1, n); // Move to end
  console.log(n - i + 1); // Print while returning
}
printNto1_Backtracking(1, 6);

// Sum of first N Natural Numbers
// Using Loop - Time Complexity: O(N)
function sumUsingLoop(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(`The sum of the first ${n} numbers is: ${sum}`);
}
sumUsingLoop(20);
sumUsingLoop(5);

//  Using the formula - Time Complexity: O(1)
function sumUsingFormula(n) {
  const sum = (n * (n + 1)) / 2;
  console.log(`The sum of the first ${n} numbers is: ${sum}`);
}
sumUsingFormula(10);
sumUsingFormula(15);

// Recursive way of calculating the sum of first N Natural Numbers:
// Parameterized Way - Time Complexity: O(N)
function parameterizedRecursion(i, sum) {
  if (i < 1) {
    console.log(sum);
    return;
  }
  parameterizedRecursion(i - 1, sum + i);
}
parameterizedRecursion(100, 0);

// Functional way - Time Complexity: O(N)
function functionalRecursion(n) {
  if (n === 0) {
    return 0;
  }

  return n + functionalRecursion(n - 1);
}
console.log(functionalRecursion(5));

// Factorial of a Number : Iterative and Recursive
// Iterative - Time Complexity: O(n)
function factorialIterative(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log("Factorial of 5 (Iterative):", factorialIterative(5));
console.log("Factorial of 10 (Iterative):", factorialIterative(10));

// Recursive Solution - Time Complexity: O(n)
function factorialRecursive(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}
console.log("Factorial of 3 (Recursive):", factorialRecursive(3));

// Reverse a given Array
// Solution 1: Using an extra array - Time Complexity: O(n), Space Complexity: O(n)
function reverseWithExtraArray(arr) {
  let n = arr.length;
  let reversed = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    reversed[n - i - 1] = arr[i];
  }
  console.log("Reversed (Extra Array):", reversed);
}

reverseWithExtraArray([1, 2, 3, 4, 5]);

//  Solution 2: In-Place Iterative (Two Pointers) - Time Complexity: O(n), Space Complexity: O(1)
function reverseInPlace(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  console.log("Reversed (In-Place):", arr);
}
reverseInPlace([5, 4, 3, 2, 1]);

// Solution 3: Recursive Method - Time Complexity: O(n), Space Complexity: O(n) (due to recursion call stack)
function reverseRecursive(arr, start, end) {
  if (start >= end) return;
  [arr[start], arr[end]] = [arr[end], arr[start]];
  reverseRecursive(arr, start + 1, end - 1);
}
const arr = [1, 2, 3, 4, 5];
reverseRecursive(arr, 0, arr.length - 1);
console.log("Reversed (Recursive):", arr);

// Solution 4: Using JavaScript Built-in Method - Time Complexity: O(n), Space Complexity: O(1) (in-place)
function reverseUsingLibrary(arr) {
  arr.reverse();
  console.log("Reversed (Built-in):", arr);
}
reverseUsingLibrary([5, 4, 3, 2, 1]);
