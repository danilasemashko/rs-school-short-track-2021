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
  const arr = [];
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    arr.push(parseInt(str.replace(str[i], ''), 10));
  }
  arr.sort((a, b) => b - a);
  return arr[0];
}

module.exports = deleteDigit;
