function oddOrEven(array) {
    let sum = 0
    array.map(a=> sum +=a)
    return sum%2===0 ? 'even' : 'odd'
  }

    /**
   * 
   * oddOrEven([]), 'even'
   * 
   * oddOrEven([1]), 'odd'  
   * 
   * oddOrEven([0, 1, 4]), 'odd'
   * 
   * oddOrEven([-1023, -1, 3]), 'odd'
   * 
   */