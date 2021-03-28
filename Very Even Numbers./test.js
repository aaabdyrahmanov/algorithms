const challenge = require('.');

it('Very Even Numbers.', () => {
  expect(challenge(8)).toBe(true);
  expect(challenge(581)).toBe(false);
  expect(challenge(1082000867370)).toBe(true);
});
