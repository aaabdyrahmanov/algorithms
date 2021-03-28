const challenge = require('.');

it('Sum of a nested list', () => {
  expect(challenge([1, 2, 3, 40])).toBe(46);
  expect(challenge([[1], [[1], [[1]]], [2]])).toBe(5);
  expect(challenge([[], [], [[[[[[[[]]]]]]]], [[], [[]]], [[[], [[]]]], []])).toBe(0);
});
