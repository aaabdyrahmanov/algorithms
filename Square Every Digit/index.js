module.exports = function squareDigits(nums) {
    let arr = nums.toString().split('').map((num) => {
      return Math.pow(parseInt(num), 2);
    });
    
    return parseInt(arr.join(""));
  }
