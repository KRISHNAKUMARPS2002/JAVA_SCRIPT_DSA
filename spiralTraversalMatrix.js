function printSpiral(matrix) {
    let ans = [];
    let r = matrix.length;
    let c = matrix[0].length;

    let top = 0, bottom = r - 1;
    let left = 0, right = c - 1;

    while (top <= bottom && left <= right) {
        // Traverse top row
        for (let i = left; i <= right; i++) {
            ans.push(matrix[top][i]);
        }
        top++;

        // Traverse right column
        for (let i = top; i <= bottom; i++) {
            ans.push(matrix[i][right]);
        }
        right--;

        // Check if there's a bottom row to traverse
        if (top <= bottom) {
            // Traverse bottom row
            for (let i = right; i >= left; i--) {
                ans.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // Check if there's a left column to traverse
        if (left <= right) {
            // Traverse left column
            for (let i = bottom; i >= top; i--) {
                ans.push(matrix[i][left]);
            }
            left++;
        }
    }

    return ans;
}
