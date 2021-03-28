const challenge = require('.');

it('Sum of Pairs', () => {
  expect(challenge([], 0)).toStrictEqual(undefined);
  expect(challenge([5, 9, 13, -3], 10)).toStrictEqual([13, -3]);
  expect(challenge([10, 5, 2, 3, 7, 5], 10)).toStrictEqual([3, 7]);
});
