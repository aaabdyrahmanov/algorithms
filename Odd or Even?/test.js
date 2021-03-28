const challenge = require('.');

it('Odd or Even?', () => {
  expect(challenge([])).toBe("even");
  expect(challenge([1])).toBe("odd");
  expect(challenge([-1023, -1, 3])).toBe("odd");
});
