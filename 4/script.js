function findDiagonalMatrix (matrix) {
    let diagonalOne = []
    let diagonalTwo = []

    for (let i = 1; i <= matrix.length; i++) {
        diagonalOne.push(matrix[i-1][i-1])
        diagonalTwo.push(matrix[i-1][(matrix.length - i)])
    }

    diagonalOne = diagonalOne.reduce((prevValue, currentValue) => prevValue + currentValue)
    diagonalTwo = diagonalTwo.reduce((prevValue, currentValue) => prevValue + currentValue)
    return diagonalOne - diagonalTwo
}