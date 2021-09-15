module.exports = function sortColors(nums) {
  const numbers = nums;
  let k = 0;
  let j = 0;

  for (let index = 0; index < numbers.length; index++) {
    // current number
    const v = numbers[index];
    numbers[index] = 2;

    if (v < 2) {
      numbers[j] = 1;
      j += 1;
    }

    if (v === 0) {
      numbers[k] = 0;
      k += 1;
    }
  }

  return numbers;
};
