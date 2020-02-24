module.exports = function countCats(matrix) {
  let result = 0;
  matrix.forEach(el => {
      el.forEach(el2 => {
        if (el2 === '^^') {
          result += 1;
        }
      });
  });
  return result;
};
