module.exports = function spacey(arr) {
  const result = [];
  let index = 1;

  while (index <= arr.length) {
    const currentArr = arr.slice(0, index);
    result.push(currentArr.join(""));
    index++;
  }

  return result;
};
