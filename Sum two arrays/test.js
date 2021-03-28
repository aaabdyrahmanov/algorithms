const challenge = require('.');

it('Sum two arrays', () => {
  expect(challenge([6,7], [])).toStrictEqual([6, 7]);
  expect(challenge([0], [-1, 5, 5, 8, 8, 8])).toStrictEqual([-1, 5, 5, 8, 8, 8]);
  expect(challenge([-1, 5, 6, 3], [0, 2, 6, 0, 7, 6, 3, 3])).toStrictEqual([2, 6, 0, 6, 0, 7, 0]);
});
