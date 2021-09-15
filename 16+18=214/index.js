module.exports = function add(num1, num2) {
  const reversedNum1 = num1.toString().split("").map(Number).reverse();
  const reversedNum2 = num2.toString().split("").map(Number).reverse();
  const maxLength = Math.max(reversedNum1.length, reversedNum2.length);
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    if (!reversedNum1[i]) {
      result.push(reversedNum2[i]);
    } else if (!reversedNum2[i]) {
      result.push(reversedNum1[i]);
    } else {
      result.push(reversedNum1[i] + reversedNum2[i]);
    }
  }

  return Number(result.reverse().join(""));
};
