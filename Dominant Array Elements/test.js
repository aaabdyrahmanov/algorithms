const challenge = require('.');

it('Dominant Array Elements', () => {
  expect(challenge([76, 17, 25, 36, 29])).toStrictEqual([76, 36, 29]);
  expect(challenge([75, 47, 42, 56, 13, 55])).toStrictEqual([75, 56, 55]);
  expect(challenge([104, 18, 37, 9, 36, 47, 28])).toStrictEqual([104, 47, 28]);
});
