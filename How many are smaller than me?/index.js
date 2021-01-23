function smaller(nums) {
    return nums.map((n, i) =>  nums.slice(i).filter(v => v < n).length);
   }


    /**
   * 
   * smaller([1, 2, 0]), [1, 1, 0]
   * 
   * smaller([1, 2, 1]), [0, 1, 0]
   * 
   * smaller[5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]
   * 
   */
