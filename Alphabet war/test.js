const challenge = require('.');

it('Alphabet war', () => {
  expect(challenge("z")).toBe("Right side wins!");
  expect(challenge("wwwwww")).toBe("Left side wins!");
  expect(challenge("zdqmwpbs")).toBe("Let's fight again!");
});
