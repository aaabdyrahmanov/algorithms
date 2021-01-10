function moveZeros (arr) {
    let amountOfZeros = 0
    arr.map(a=> a === 0 ? amountOfZeros++: null)
    return [...arr.filter(a=>a !== 0), ...Array(amountOfZeros).fill(0)]
  }

  /**
   * 
   * moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
   * 
   * moveZeros([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]), 
   *           [9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0]
   * 
   * moveZeros([0, 1, null, 2, false, 1, 0]),
   *           [1, null, 2, false, 1, 0, 0]
   * 
   */