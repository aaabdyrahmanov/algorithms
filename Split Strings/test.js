const challenge = require('.');

it('Split Strings', () => {
  expect(challenge("")).toStrictEqual([]);
  expect(challenge("abcdef")).toStrictEqual(["ab", "cd", "ef"]);
  expect(challenge("abcdefg")).toStrictEqual(["ab", "cd", "ef", "g_"]);
});
