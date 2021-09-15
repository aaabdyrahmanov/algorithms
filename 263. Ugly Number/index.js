module.exports = function isUgly(num) {
  if (num < 1) return false;
  let receviedNum = num;

  while (receviedNum >= 2) {
    if (receviedNum % 2 === 0) receviedNum /= 2;
    else if (receviedNum % 3 === 0) receviedNum /= 3;
    else if (receviedNum % 5 === 0) receviedNum /= 5;
    else return false;
  }

  return true;
};
