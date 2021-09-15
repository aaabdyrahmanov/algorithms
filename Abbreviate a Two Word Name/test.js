const challenge = require(".");

it("Abbreviate a Two Word Name", () => {
  expect(challenge("Patrick Feenan")).toBe("P.F");
  expect(challenge("David Mendieta")).toBe("D.M");
  expect(challenge("rctRkikHpPKSUmWL fVWpPsJoYahVLdNZFH")).toBe("R.F");
});
