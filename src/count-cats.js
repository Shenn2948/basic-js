const CustomError = require("../extensions/custom-error");

/**
 *
 * @param {Array<Array<String>>} matrix
 */
module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(row => {
    row.forEach(element => {
      if (element === '^^') {
        count++;
      }
    });
  });
  return count;
};
