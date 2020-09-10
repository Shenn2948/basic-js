const CustomError = require("../extensions/custom-error");

/**
 *
 * @param {Date} date
 */
module.exports = function getSeason(date) {
  if (date == null) {
    return 'Unable to determine the time of year!';
  }

  if (!isValidDate(date)) {
    throw new CustomError("not a date");
  }

  const seasons = ['winter', 'spring', 'summer', 'fall'];
  const month = date.getMonth() + 1;
  const result = Math.floor(month / 3);

  if (result === 1) {
    return seasons[1];
  } else if (result === 2) {
    return seasons[2];
  } else if (result === 3) {
    return seasons[3];
  } else {
    return seasons[0];
  }
};

function isValidDate(date) {
  return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
}
