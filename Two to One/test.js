const challenge = require('.');

it('Two to One', () => {
  expect(challenge("inmanylanguages", "theresapairoffunctions")).toBe("acefghilmnoprstuy");
  expect(challenge("aretheyhere", "yestheyarehere")).toBe("aehrsty");
  expect(challenge("loopingisfunbutdangerous", "lessdangerousthancoding")).toBe("abcdefghilnoprstu");
});
