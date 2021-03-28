module.exports = function addDigits (number) {
    let answer = number;

    while (answer > 9) {
      let sum = 0;

      while (answer > 0) {
        const current = answer % 10;
        sum += current;
        answer = (answer - current) / 10;
      }
      answer = sum;
    }

    return answer;
};

