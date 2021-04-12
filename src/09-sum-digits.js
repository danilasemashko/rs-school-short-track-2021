/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const num = n.toString().split('');
  // const Str = num.split('');
  let sum = 0;
  let check = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
    if (num.length === 2 && sum >= 10) {
      sum = num[i];
    }
    if (sum >= 10 && check === 0) {
      sum -= Number(num[i]);
      check++;
    }
  }
  return Number(sum);
}

module.exports = getSumOfDigits;
