const challenge = require('.');

it('Simple Fun #160: Cut The Ropes', () => {
  expect(challenge([3, 3, 2, 9, 7])).toStrictEqual([5, 4, 2, 1]);
  expect(challenge([1, 2, 3, 4, 3, 3, 2, 1])).toStrictEqual([8, 6, 4, 1]);
  expect(
    challenge(
      [13035, 6618, 13056, 20912, 1119, 13035, 6618, 6618, 8482, 13056]
    )
  ).toStrictEqual([10, 9, 6, 5, 3, 1]);
});
