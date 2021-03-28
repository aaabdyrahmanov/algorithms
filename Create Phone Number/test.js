const challenge = require('.');

it('Create Phone Number', () => {
  expect(challenge([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890");
  expect(challenge([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe("(111) 111-1111");
  expect(challenge([2, 1, 4, 0, 9, 3, 7, 7, 8, 2])).toBe("(214) 093-7782");
});
