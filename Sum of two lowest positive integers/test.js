const challenge = require('.');

it('Sum of two lowest positive integers', () => {
  expect(challenge([15, 28, 4, 2, 43])).toBe(6);
  expect(challenge([23, 71, 33, 82, 1])).toBe(24);
  expect(challenge([52, 76, 14, 12, 4])).toBe(16);
});
