const challenge = require('.');

it('Find Screen Size', () => {
  expect(challenge(1024,"4:3")).toBe("1024x768");
  expect(challenge(3840,"32:9")).toBe("3840x1080");
  expect(challenge(1280,"16:9")).toBe("1280x720");
});
