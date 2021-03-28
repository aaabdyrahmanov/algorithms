const challenge = require('.');

it('Numbers in strings', () => {
  expect(challenge("gh12cdy695m1")).toBe(695);
  expect(challenge("vih61w8oohj5")).toBe(61);
  expect(challenge("lu1j8qbbb85")).toBe(85);
});
