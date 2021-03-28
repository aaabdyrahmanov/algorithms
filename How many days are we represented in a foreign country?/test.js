const challenge = require('.');

it('How many days are we represented in a foreign country?', () => {
  expect(challenge([[10, 15], [25, 35]])).toBe(17);
  expect(challenge([[2, 8], [6, 16], [17, 26]])).toBe(25);
  expect(challenge([[2, 8], [220, 229], [10, 16]])).toBe(24);
});
