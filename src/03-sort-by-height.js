/**
 *
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
/* eslint prefer-arrow-callback: 0 */
function sortByHeight(arr) {
  const array = arr;
  const index = [];
  const res = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === -1) {
      index.push(i);
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === -1) {
      array.splice(i, 1);
      i--;
    }
  }
  array.sort(function (a, b) { return a - b; });
  let indexCH = 0;
  let arrayCH = 0;
  for (let i = 0; i < index.length + array.length; i++) {
    if (i === index[indexCH]) {
      res.push(-1);
      indexCH++;
    } else {
      res.push(array[arrayCH]);
      arrayCH++;
    }
  }
  return res;
}

module.exports = sortByHeight;
