const challenge = require('.');

it('Sort the odd', () => {
  expect(challenge([5, 3, 1, 8, 0])).toStrictEqual([1, 3, 5, 8, 0]);
  expect(challenge([32, 42, 15, 82, 87, 90])).toStrictEqual([32, 42, 15, 82, 87, 90]);
  expect(challenge([0, 1, 2, 3, 4, 9, 8, 7, 6, 5])).toStrictEqual([0, 1, 2, 3, 4, 5, 8, 7, 6, 9]);
});
