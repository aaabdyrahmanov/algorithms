const addDigits = (number) => {

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

// addDigits(38)   ->  2 
// addDigits(23)   ->  5
// addDigits(209)  ->  2
// addDigits(89)   ->  8
// addDigits(76)   ->  4
