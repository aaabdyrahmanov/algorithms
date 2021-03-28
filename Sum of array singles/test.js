const challenge = require('.');

it('Sum of array singles', () => {
  expect(challenge([4,5,7,5,4,8])).toBe(15);
  expect(challenge([5, 10, 10, 13, 13, 19])).toBe(24);
  expect(challenge([5, 11, 11, 13, 13, 17, 18, 18])).toBe(22);
});
