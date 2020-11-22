function maxNumber(n) {
    const largest = String(n).split('').sort().reverse().join('')
    return Number(largest)
  }

    /**
   * 
   * maxNumber(9617), 9761
   * 
   * maxNumber(4516392), 9654321
   * 
   * maxNumber(1000000), 1000000
   * 
   */