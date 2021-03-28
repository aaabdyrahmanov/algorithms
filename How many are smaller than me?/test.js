const challenge = require('.');

it('How many are smaller than me?', () => {
  expect(challenge([1, 2, 0])).toStrictEqual([1, 1, 0]);
  expect(challenge([1, 2, 1])).toStrictEqual([0, 1, 0]);
  expect(challenge([5, 4, 7, 9, 2, 4, 4, 5, 6])).toStrictEqual([4, 1, 5, 5, 0, 0, 0, 0, 0]);
});
