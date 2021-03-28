const challenge = require('.');

it('List of Presents', () => {
  expect(challenge(0, [1])).toBe(0);
  expect(challenge(20, [13, 2, 4, 6, 1])).toBe(4);
  expect(challenge(910238, [1231, 42340232403, 9324810, 23948, 19823, 1, 3209, 23894, 1093])).toBe(7);
});
