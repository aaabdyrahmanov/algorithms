sumEvenNumbers = (input) => input.filter(i=> i%2 == 0).reduce((a,b)=> a+b)

    /**
   * sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 30
   * 
   * sumEvenNumbers(-16,-32,20,21,41,42) 14
   * 
   * sumEvenNumbers(1337,374,849,22.5,19,16,0,0,16,32), 438
   *
   */