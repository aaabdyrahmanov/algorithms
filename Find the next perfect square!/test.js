const challenge = require('.');

it('Find the next perfect square!', () => {
  expect(challenge(25)).toBe(36);
  expect(challenge(625)).toBe(676);
  expect(challenge(342786627)).toBe(-1);
});
