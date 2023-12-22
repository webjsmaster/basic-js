const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrayNumbers = n.toString().split('').map(Number);
  let array = [];
  
  for (let i = 0; i < arrayNumbers.length; i++) {
    let newArray = arrayNumbers.slice();
    newArray.splice(i,1);
    array.push(+newArray.join(''));
  }
  
  return Math.max(...array);
}

module.exports = {
  deleteDigit
};
