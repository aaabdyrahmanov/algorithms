const challenge = require('.');

it('Replace all items', () => {
  expect(challenge([], 1, 2)).toStrictEqual([]);
  expect(challenge("Hello World", "o", 0)).toStrictEqual("Hell0 W0rld");
  expect(challenge([1,2,2], 1, 2)).toStrictEqual([2,2,2]);
});
