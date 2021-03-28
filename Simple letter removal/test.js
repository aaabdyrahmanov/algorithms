const challenge = require('.');

it('Simple letter removal', () => {
  expect(challenge("abracadabra", 50)).toBe("");
  expect(challenge("abracadabra", 1)).toBe("bracadabra");
  expect(challenge("abracadabra", 8)).toBe("rdr");
});
