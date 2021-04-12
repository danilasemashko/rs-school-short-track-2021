/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let position = -1;
  let first = 0;
  let last = array.length - 1;
  while (position < 0 && first <= last) {
    const mid = Math.floor((first + last) / 2);
    if (value === array[mid]) {
      position = mid;
    } else if (value > array[mid]) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }
  return position;
}

module.exports = findIndex;
