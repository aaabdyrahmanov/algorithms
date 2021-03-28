const challenge = require('.');

it('Peak array index', () => {
  expect(challenge([1, 12, 3, 3, 6, 3, 1])).toBe(2);
  expect(challenge([10, 20, 30, 40])).toBe(-1);
  expect(challenge([3, 1, 1, 6, 6, 4, 3, 8, 4, 9, 7, 5, 5, 1, 5, 10, 8, 10, 4, 2, 7, 9, 2, 9, 2, 6, 5, 3, 8, 10, 9, 1, 11, 5, 14, 3, 8, 7, 6, 5, 3, 7, 2, 8, 3, 13, 3, 1,15, 12])).toBe(-1);
});
