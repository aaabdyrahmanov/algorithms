module.exports = function solution(str) {
  const arr = [];

  for (let i = 0; i < str.length; i += 2) {
    arr.push(str[i] + str[i + 1]);
  }

  if (arr[arr.length - 1]) {
    arr[arr.length - 1] = arr[arr.length - 1].replace("undefined", "_");
  }

  return arr;
};
