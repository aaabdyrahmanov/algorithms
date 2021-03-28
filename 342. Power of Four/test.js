const challenge = require('.');

it('Power of Four', () => {
  expect(challenge(64)).toBe(true);
  expect(challenge(127)).toBe(false);
  expect(challenge(1)).toBe(true);
});
