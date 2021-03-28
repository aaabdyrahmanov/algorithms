const challenge = require('.');

it('Even or Odd - Which is Greater?', () => {
  expect(challenge("12")).toBe("Even is greater than Odd");
  expect(challenge("121")).toBe("Even and Odd are the same");
  expect(challenge("12345")).toBe("Odd is greater than Even");
});
