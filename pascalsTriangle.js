//In this case, we are given the row number r and the column number c, and we need to find out the element at position (r,c). 
 function ncr(n, r) {
    let res = 1; 
    for(let i = 0; i <r; i++) {
        res = res * (n - i);
        res = res / (i + 1);
    }
    return res;
}
function pascalsTriangle(r, c) {
    const element = ncr(r - 1, c - 1);
    return element;
}

//Given the row number n. Print the n-th row of Pascal’s triangle.
//Brute force Approach
function ncr(n, r) {
    let res = 1;
    for(let i = 0; i < n; i++) {
        res = res * (n - i);
        res = res / (i + 1);
    }
    return res;
}
function pascalsTriangle(n) {
    for(let c = 1; c <= n; c++) {
        console.log(ncr(n -1, c - 1) + "");
    }
    console.log("n");
}

//Optimal Approach
function pascalTriangle(n) {
    let ans = 1;
    console.log(ans + " "); // printing 1st element
  
    //Printing the rest of the part:
    for (let i = 1; i < n; i++) {
      ans = ans * (n - i);
      ans = ans / i;
      console.log(ans + " ");
    }
    console.log("n");
}

//Print entire traiangle
//Brute force Approach
function ncr(n, r) {
    let res = 1;
    for(let i = 0; i < r; i++) {
        res = res * (n - i);
        res = res / (i + 1);
    }
    return parseInt(res);
}
function pascalsTriangle(n) {
    let ans = [];
    for(let row = 1; row <= n; row++) {
        const tempList = [];
        for(let col = 1; col <= row; col++) {
            tempList.push(ncr(row - 1, col - 1));
        }
        ans.push(tempList);
    }
    return ans;
}

//Optimal Approach
function ncr(r) {
    let ans = 1;
    let ansRow = [1];

    for(let col = 1; col < r; col++) {
        ans = ans * (row - col);
        ans = ans / col;
        ansRow.push(ans)
    }
    return ansRow;
}
function pascalsTriangle(n) {
    let ans = [];
    for(let row = 1; row <= n; row++) {
        ans.push(ncr(row));
    }
    return ans;
}
//Optimal Approach
var generate = function(numRows) {
    let result = [];
    for (let row = 0; row < numRows; row++) {
        let rowValues = [];
        let prevRow = result[row - 1]; // Initialize prevRow for the current row
        for (let col = 0; col <= row; col++) {
            if (col === 0 || col === row) {
                rowValues.push(1);
            } else {
                let leftValue = prevRow[col - 1] || 0; // Check if prevRow[col - 1] exists
                let rightValue = prevRow[col] || 0; // Check if prevRow[col] exists
                let value = leftValue + rightValue;
                rowValues.push(value);
            }
        }
        result.push(rowValues);
    }
    return result;
};
