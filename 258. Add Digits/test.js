const challenge = require('.');

it('Add Digits', () => {
  expect(challenge(38)).toBe(2);
  expect(challenge(23)).toBe(5);
  expect(challenge(209)).toBe(2);
});
