const challenge = require('.');

it('Moving Zeros To The End', () => {
  expect(challenge([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])).toStrictEqual([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
  expect(challenge([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9])).toStrictEqual([9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0]);
  expect(challenge([0, 1, null, 2, false, 1, 0])).toStrictEqual([1, null, 2, false, 1, 0, 0]);
});
