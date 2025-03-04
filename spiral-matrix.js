let n=4;
let left = 0, right = n-1, top = 0, bottom = n-1;
let matrix=[];
for (let i = 0; i < n; i++) {
    matrix.push([]);
}
let count = 1;
while(left<=right&&top<=bottom) {
    for(let i=left;i<=right;i++) {
        matrix[left][i] = count++;
    }
    top++;
    for (let i = top; i <= bottom; i++) {
        matrix[i][right] = count++;
    }
    right--;
    for (let i = right; i >= left; i--) {
        matrix[bottom][i] = count++;
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
        matrix[i][left] = count++;
    }
    left++;
}
console.log(matrix);