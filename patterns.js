//Square pattern
function squarePattern(N1) {
  for (let i = 0; i < N1; i++) {
    let row = "";
    for (let j = 0; j < N1; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
const N1 = 5;
squarePattern(N1);

//Right-Angled Triangle Pattern
function rightAngledTrinagle(N2) {
  for (let i = 0; i <= N2; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
const N2 = 5;
rightAngledTrinagle(N2);

//Right-Angled Number Pyramid
function rightAngledNumberTrinagle(N3) {
  for (let i = 1; i <= N3; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}
const N3 = 5;
rightAngledNumberTrinagle(N3);

//Right-Angled Number Pyramid - II
function rightAngledNumberTrinagle2(N4) {
  for (let i = 1; i <= N4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i + " ";
    }
    console.log(row);
  }
}
const N4 = 5;
rightAngledNumberTrinagle2(N4);

//Inverted Right Pyramid
function invertedRightPyramid(N5) {
  for (let i = N5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
const N5 = 5;
invertedRightPyramid(N5);

//Inverted Numbered Right Pyramid
function invertedNumberRightPyramid(N6) {
  for (let i = N6; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}
const N6 = 5;
invertedNumberRightPyramid(N6);

//Star Pyramid
function starPyramid(N7) {
  for (let i = 0; i < N7; i++) {
    let row = "";

    // Add leading spaces
    for (let j = 0; j < N7 - i - 1; j++) {
      row += " ";
    }

    // Add stars
    for (let k = 0; k < 2 * i + 1; k++) {
      row += "*";
    }

    console.log(row);
  }
}

const N7 = 5;
starPyramid(N7);

//Inverted Star Pyramid
function invertedStarPyramid(N8) {
  for (let i = 0; i < N8; i++) {
    let row = "";

    // Add leading spaces
    for (let j = 0; j < i; j++) {
      row += " ";
    }

    // Add stars
    for (let k = 0; k < 2 * (N8 - i) - 1; k++) {
      row += "*";
    }

    console.log(row);
  }
}

const N8 = 5;
invertedStarPyramid(N8);

//Diamond Star Pattern
function diamondStarPattern(N9) {
  //Upper Portion
  for (let i = 0; i < N9; i++) {
    let row = "";

    // Add leading spaces
    for (let j = 0; j < N9 - i - 1; j++) {
      row += " ";
    }

    // Add stars
    for (let k = 0; k < 2 * i + 1; k++) {
      row += "*";
    }

    console.log(row);
  }
  //Lower Portion
  for (let i = 0; i < N8; i++) {
    let row = "";

    // Add leading spaces
    for (let j = 0; j < i; j++) {
      row += " ";
    }

    // Add stars
    for (let k = 0; k < 2 * (N8 - i) - 1; k++) {
      row += "*";
    }

    console.log(row);
  }
}
const N9 = 5;
diamondStarPattern(N9);
