const challenge = require('.');

it('Are the numbers in order?', () => {
  expect(challenge([89,123,444,521,999])).toBe(true);
  expect(challenge([4,5,6,7,8])).toBe(true);
  expect(challenge([5,4,3,2,1])).toBe(false);
});
