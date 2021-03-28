const challenge = require('.');

it('Extra Perfect Numbers (Special Numbers Series #7)', () => {
  expect(challenge(3)).toStrictEqual([1, 3]);
  expect(challenge(5)).toStrictEqual([1, 3, 5]);
  expect(challenge(28)).toStrictEqual([1,3,5,7,9,11,13,15,17,19,21,23,25,27]);
});
