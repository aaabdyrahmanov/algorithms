function add(num1, num2) {
    num1 = num1.toString().split('').map(Number).reverse();
    num2 = num2.toString().split('').map(Number).reverse();
    let result = [];
    let maxLength = Math.max(num1.length, num2.length);
    for (let i = 0; i < maxLength; i++) {
      if (num1[i] === undefined) {
          result.push(num2[i]);
      } else if (num2[i] === undefined) {
        result.push(num1[i]);
      } else {
        result.push(num1[i] + num2[i]);
      }
    }
    return Number(result.reverse().join(''));
  }

    /**
   * 
   * add(0, 0), 0
   * 
   * add(16, 18), 214
   * 
   * add(122, 81), 1103
   * 
   */