const challenge = require('.');

it('Basic Sequence Practice', () => {
  expect(challenge(1)).toStrictEqual([0, 1]);
  expect(challenge(3)).toStrictEqual([0, 1, 3, 6]);
  expect(challenge(-6)).toStrictEqual([0, -1, -3, -6, -10, -15, -21]);
});
