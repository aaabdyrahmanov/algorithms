module.exports = function sortArray(array) {
  const indexListOfEvens = [];
  const listOfOdds = [];

  array.map((a) =>
    a % 2 != 0 ? listOfOdds.push(a) : indexListOfEvens.push(array.indexOf(a))
  );
  listOfOdds.sort((x, y) => x - y);
  indexListOfEvens.map((a) => listOfOdds.splice(a, 0, array[a]));

  return listOfOdds;
};
