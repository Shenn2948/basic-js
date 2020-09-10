const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

/**
 *
 * @param {String} sampleActivity
 */
module.exports = function dateSample(sampleActivity) {

  if (typeof (sampleActivity) !== 'string') {
    return false;
  }

  const activity = parseFloat(sampleActivity);
  if (isNaN(activity) || activity > 15) {
    return false;
  }

  const ln2 = 0.693;
  const rateConstant = ln2 / HALF_LIFE_PERIOD;
  const age = Math.log(MODERN_ACTIVITY / activity) / rateConstant;

  const result = Math.ceil(age);
  return isFinite(result) ? result : false;
};
