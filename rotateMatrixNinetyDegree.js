//Brute force Approach
function rotateMatrix(matrix) {
    let n = matrix.length;
    let rotated = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotated[j][n - i - 1] = matrix[i][j];
        }
    }
    return rotated;
}
//Optimal Approach 
var rotate = function(matrix) {
    let n = matrix.length;
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
    return matrix;
};
//optimal approach
var setZeroes = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let col0 = 1;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(matrix[i][j] === 0) {
                matrix[i][0] = 0;
                if(j !== 0) {
                    matrix[0][j] = 0;
                } else {
                    col0 = 0;
                }
            }
        }
    }

    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j ++) {
            if(matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if(matrix[0][0] === 0) {
        for(let i = 0; i < m; i++) {
            matrix[0][i] = 0;
        }
    }

    if(col0 === 0) {
        for(let i = 0; i < n; i++) {
            matrix[i][0] = 0;
        }
    }
    return matrix;
};


