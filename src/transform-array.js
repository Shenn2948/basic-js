const CustomError = require("../extensions/custom-error");

/**
 *
 * @param {Array} arr
 */
module.exports = function transform(arr) {
  const doubles = arr.map((value, index, array) => {
    const prev = array[index - 1];
    const next = array[index + 1];

    if (value === `--double-prev`) {
      return prev;
    }

    if (value === `--double-next`) {
      return next;
    }

    if (next === `--discard-prev` || prev === `--discard-next`) {
      return null;
    }

    return value;

  }).filter(x => x !== null && x !== undefined && x !== `--discard-prev` && x !== `--discard-next`);

  return doubles;
};
