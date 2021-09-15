module.exports = function evenOrOdd(str) {
  const number = str;
  let odds = 0;
  let evens = 0;

  for (let i = 0; i < number.length; i++) {
    if (Number(number[i]) % 2) {
      odds += Number(number[i]);
    } else {
      evens += Number(number[i]);
    }
  }

  return odds > evens
    ? "Odd is greater than Even"
    : odds < evens
    ? "Even is greater than Odd"
    : "Even and Odd are the same";
};
