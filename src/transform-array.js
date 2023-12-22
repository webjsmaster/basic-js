const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let newArray = Array.from(arr);
  
  for (let i = 0; i < newArray.length; i++) {
    if (typeof newArray[i] === 'string') {
      switch (newArray[i]) {
        case '--discard-next':
          delete newArray[i+1];
          delete newArray[i];          
          break;

        case '--discard-prev': 
          delete newArray[i-1];
          delete newArray[i];              
          break;

        case '--double-next':
          if (newArray[i+1] !== undefined) {
            newArray[i] = newArray[i+1];
          }          
          else {
            delete newArray[i];
          }         
          break;

        case '--double-prev': 
          if (newArray[i-1] !== undefined) {
            newArray[i] = newArray[i-1];
          }        
          else {
            delete newArray[i];
          }     
          break;
      } 
    }
  }
  return newArray.filter(elem => elem !== undefined);
}

module.exports = {
  transform
};
