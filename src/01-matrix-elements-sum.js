function getMatrixElementsSum(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let sum = 0;

  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      if (matrix[i][j] === 0) {
        break;
      }
      sum += matrix[i][j];
    }
  }

  return sum;
}

module.exports = getMatrixElementsSum;
