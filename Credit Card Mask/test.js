const challenge = require('.');

it('Credit Card Mask', () => {
  expect(challenge("2")).toBe("2");
  expect(challenge("189234")).toBe("##9234");
  expect(challenge("8530171406314319")).toBe("############4319");
});
