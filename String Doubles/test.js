const challenge = require('.');

it('String Doubles', () => {
  expect(challenge("abbbzz")).toBe("ab");
  expect(challenge("vvvvvoiiiiin")).toBe("voin");
  expect(challenge("abbcccdddda")).toBe("aca");
});
