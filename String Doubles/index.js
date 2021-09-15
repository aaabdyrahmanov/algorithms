module.exports = function doubles(s) {
  let singles = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      i++;
    } else {
      singles += s[i];
    }
  }

  return singles;
};
