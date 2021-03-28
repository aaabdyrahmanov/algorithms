const challenge = require('.');

it('Break camelCase', () => {
  expect(challenge("camelCasing")).toBe("camel Casing");
  expect(challenge("camelCasingTest")).toBe("camel Casing Test");
  expect(challenge("camelCaseLetters")).toBe("camel Case Letters");
});
