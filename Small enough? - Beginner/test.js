const challenge = require('.');

it('Small enough? - Beginner', () => {
  expect(challenge([66, 101], 200)).toStrictEqual(true);
  expect(challenge([78, 117, 110, 99, 104, 117, 107, 115], 100)).toStrictEqual(false);
  expect(challenge([80, 117, 115, 104, 45, 85, 112, 115], 120)).toStrictEqual(true);
});
