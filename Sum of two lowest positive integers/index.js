function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((x,y)=>x-y)
    return numbers[1]+numbers[0]
  }

    /**
   * 
   * sumTwoSmallestNumbers([ 15, 28, 4, 2, 43 ]), 6
   * 
   * sumTwoSmallestNumbers([ 23, 71, 33, 82, 1 ]), 24
   * 
   * sumTwoSmallestNumbers([ 52, 76, 14, 12, 4 ]), 16
   * 
   */