module.exports = function extraPerfect(n) {
  const str = [1];

  for (let i = 3; i <= n; i++) {
    if (i % 2 !== 0) {
      str.push(i);
    }
  }

  return str;
};
