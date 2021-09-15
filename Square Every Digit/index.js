module.exports = function squareDigits(nums) {
  const arr = nums
    .toString()
    .split("")
    .map((num) => parseInt(num) ** 2);

  return parseInt(arr.join(""));
};
