const challenge = require('.');

it('Valid Spacing', () => {
  expect(challenge("Hello world")).toBe(true);
  expect(challenge("Hello")).toBe(true);
  expect(challenge("Hello  world ")).toBe(false);
});
