module.exports = function howManyGifts(maxBudget, gifts){
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
