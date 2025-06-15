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
