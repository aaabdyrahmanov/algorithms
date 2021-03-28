const challenge = require('.');

it('Form The Largest', () => {
  expect(challenge(9617)).toBe(9761);
  expect(challenge(4516392)).toBe(9654321);
  expect(challenge(1000000)).toBe(1000000);
});
