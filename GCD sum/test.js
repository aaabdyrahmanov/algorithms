const challenge = require('.');

it('GCD sum', () => {
  expect(challenge(6, 3)).toStrictEqual([3, 3]);
  expect(challenge(10, 3)).toStrictEqual(-1);
  expect(challenge(12, 4)).toStrictEqual([4, 8]);
});
