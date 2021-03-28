const challenge = require('.');

it('Ugly Number', () => {
  expect(challenge(0)).toBe(false);
  expect(challenge(60)).toBe(true);
  expect(challenge(123)).toBe(false);
});
