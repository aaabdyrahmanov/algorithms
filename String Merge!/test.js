const challenge = require('.');

it('String Merge!', () => {
  expect(challenge("person","here", "e")).toBe("pere");
  expect(challenge("incredible","people", "e")).toBe("increople");
  expect(challenge("abcdefxxxyzz","abcxxxyyyxyzz", "x")).toBe("abcdefxxxyyyxyzz");
});
