const challenge = require('.');

it('String ends with?', () => {
  expect(challenge("abcde", "cde")).toBe(true);
  expect(challenge("samurai", "ra")).toBe(false);
  expect(challenge("!@#$%^&*() :-)", ":-)")).toBe(true);
});
