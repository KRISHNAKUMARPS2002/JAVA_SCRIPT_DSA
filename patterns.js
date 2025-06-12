// SQUARE PATTERN
function square_pattern(n) {
  for (let i = 0; i < n; i++) {
    console.log(" *".repeat(n));
  }
}
square_pattern(5);

// RIGHT-ANGLED TRIANGLE PATTERN
function rightTriangle_pattern(n) {
  for (let i = 1; i <= n; i++) {
    console.log("* ".repeat(i));
  }
}
rightTriangle_pattern(6);

// Right-Angled Number Pyramid Pattern prints- j
function rightTrinagleNumber_pattern(n) {
  for (i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row.trim());
  }
}
rightTrinagleNumber_pattern(5);

// Right-Angled Number Pyramid Pattern prints- i
function rightTiangleSameNumber_pattern(n) {
  for (let i = 1; i <= n; i++) {
    console.log((i + " ").repeat(i).trim());
  }
}
rightTiangleSameNumber_pattern(5);

// INVERTED STAR PYRAMIND
function invertedStarPyramid_pattern(n) {
  for (let i = n; i >= 1; i--) {
    console.log("* ".repeat(i).trim());
  }
}
invertedStarPyramid_pattern(5);

// Inverted Right-Angled Number Pyramid
function invertedNumberPyramid_pattern(n) {
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row.trim());
  }
}
invertedNumberPyramid_pattern(6);

// Star Pyramid (Centered)
function starPyramid(n) {
  for (let i = 0; i < n; i++) {
    let spaces = " ".repeat(n - i - 1);
    let stars = "*".repeat(2 * i + 1);
    console.log(spaces + stars);
  }
}

starPyramid(5);

// INVERTED STAR PYRAMIND
function invertedStarPyramid(n) {
  for (let i = 0; i < n; i++) {
    let spaces = " ".repeat(i);
    let stars = "*".repeat(2 * (n - i) - 1);

    console.log(spaces + stars);
  }
}
invertedStarPyramid(6);

// DIAMOND STAR PATTERN
function diamondStarPattern(n) {
  // Upper part
  for (let i = 0; i < n; i++) {
    let spaces = " ".repeat(n - i - 1);
    let stars = "*".repeat(2 * i + 1);
    console.log(spaces + stars);
  }

  // Lower part
  for (let i = 0; i < n - 1; i++) {
    let spaces = " ".repeat(i + 1);
    let stars = "*".repeat(2 * (n - i - 2) + 1);
    console.log(spaces + stars);
  }
}

diamondStarPattern(5);
