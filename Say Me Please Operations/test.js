const challenge = require('.');

it('Say Me Please Operations', () => {
  expect(challenge("2 2 4")).toBe("addition");
  expect(challenge("1 2 3 5 8")).toBe("addition, addition, addition");
  expect(
    challenge(
      "15 15 225 240 54000 54240 2928960000 158866790400000 158869719360000 2.523912240647194e+28 2.52391224064721e+28 0"
    )
  ).toBe(
    "multiplication, addition, multiplication, addition, multiplication, multiplication, addition, division, division, subtraction"
  );
});
