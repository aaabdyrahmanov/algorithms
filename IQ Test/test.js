const challenge = require('.');

it('IQ Test', () => {
  expect(challenge("2 4 7 8 10")).toBe(3);
  expect(challenge("1 2 2")).toBe(1);
  expect(challenge("43 28 1 91")).toBe(2);
});
