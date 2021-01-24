function squareDigits(nums) {
    let arr = nums.toString().split('').map((num) => {
      return Math.pow(parseInt(num), 2);
    });
    
    return parseInt(arr.join(""));
  }

    /**
   * 
   * squareDigits(31), 91
   * 
   * squareDigits(88), 6464
   * 
   * squareDigits(9119), 811181
   * 
   */