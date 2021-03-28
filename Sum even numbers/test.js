const challenge = require('.');

it('Sum even numbers', () => {
  expect(challenge([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(30);
  expect(challenge([-16, -32, 20, 21, 41, 42])).toBe(14);
  expect(challenge([1337, 374, 849, 22.5, 19, 16, 0, 0, 16, 32])).toBe(438);
});
