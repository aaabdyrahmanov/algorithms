const challenge = require('.');

it('Square Every Digit', () => {
  expect(challenge(31)).toBe(91);
  expect(challenge(88)).toBe(6464);
  expect(challenge(9119)).toBe(811181);
});
