const challenge = require('.');

it('Playing with digits', () => {
  expect(challenge(89, 1)).toBe(1);
  expect(challenge(92, 1)).toBe(-1);
  expect(challenge(46288, 3)).toBe(51);
});
