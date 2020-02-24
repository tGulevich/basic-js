const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let num = parseFloat(sampleActivity);

  if (num && typeof(sampleActivity) === 'string') {
    let res = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD);
    
    if (res > 0) {
      return Math.ceil(res);
    } else {
      return false;
    }
  } else {
    return false;
  }

};
