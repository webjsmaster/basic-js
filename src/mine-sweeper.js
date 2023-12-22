const { NotImplementedError } = require('../extensions/index.js')

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	function getCoordinates(x, y) {
		if (x < 0 || y < 0 || x > matrix.length - 1 || y > matrix.length - 1) {
			return false
		}
		return true
	}

	let resArr = []
	let length = 0

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			let count = 0
			length = matrix[i].length

			if (getCoordinates(i - 1, j - 1)) {
				if (matrix[i - 1][j - 1]) {
					count++
				}
			}

			if (getCoordinates(i - 1, j)) {
				if (matrix[i - 1][j]) {
					count++
				}
			}

			if (getCoordinates(i - 1, j + 1)) {
				if (matrix[i - 1][j + 1]) {
					count++
				}
			}

			if (getCoordinates(i, j - 1)) {
				if (matrix[i][j - 1]) {
					count++
				}
			}

			if (getCoordinates(i, j + 1)) {
				if (matrix[i][j + 1]) {
					count++
				}
			}

			if (getCoordinates(i + 1, j - 1)) {
				if (matrix[i + 1][j - 1]) {
					count++
				}
			}

			if (getCoordinates(i + 1, j)) {
				if (matrix[i + 1][j]) {
					count++
				}
			}

			if (getCoordinates(i + 1, j + 1)) {
				if (matrix[i + 1][j + 1]) {
					count++
				}
			}
			resArr.push(count)
		}
	}

	return resArr.reduce(function (rows, key, index) {
		return (index % length == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows
	}, [])
}

module.exports = {
	minesweeper,
}
