module.exports = function solution(string) {
  let word = string;
  const arr = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i].toUpperCase()) arr.push(i);
  }
  arr.map(
    (m, i) => (word = [word.slice(0, m + i), " ", word.slice(m + i)].join(""))
  );

  return word;
};
