function howManyGifts(maxBudget, gifts){
    gifts.sort((a, b) => a - b);
    let howMany = 0;
    let budget = maxBudget;
    gifts.forEach(el => {
     if(budget - el >= 0) {
       budget -= el;
       howMany++ 
     }
    })
    return howMany;
  }

    /**
   * 
   * howManyGifts(0, [1]), 0
   * 
   * howManyGifts(20, [13, 2, 4, 6, 1]), 4
   * 
   * howManyGifts(910238, [1231, 42340232403, 9324810, 23948, 19823, 1, 3209, 23894, 1093]), 7
   * 
   */