const challenge = require('.');

it('Descending Order', () => {
  expect(challenge(1)).toBe(1);
  expect(challenge(12896)).toBe(98621);
  expect(challenge(123456789)).toBe(987654321);
});
