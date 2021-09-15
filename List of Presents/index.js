module.exports = function howManyGifts(maxBudget, gifts) {
  let howMany = 0;
  let budget = maxBudget;
  gifts.sort((a, b) => a - b);

  gifts.forEach((el) => {
    if (budget - el >= 0) {
      budget -= el;
      howMany++;
    }
  });

  return howMany;
};
