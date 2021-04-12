function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  const s11 = s1.split('');
  const s22 = s2.split('');
  for (let i = 0; i < s11.length; i++) {
    const index = s22.indexOf(s11[i]);
    if (index !== -1) {
      sum++;
      s22.splice(index, 1);
    }
  }
  return sum;
}

module.exports = getCommonCharacterCount;
