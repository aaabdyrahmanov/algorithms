module.exports = function smaller(nums) {
  return nums.map((n, i) => nums.slice(i).filter((v) => v < n).length);
};
