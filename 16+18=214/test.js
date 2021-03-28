const challenge = require('.');

it('16+18=214', () => {
  expect(challenge(0, 0)).toBe(0);
  expect(challenge(2, 11)).toBe(13);
  expect(challenge(122, 81)).toBe(1103);
});
