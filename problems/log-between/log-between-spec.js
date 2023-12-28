import logBetween from "./log-between.js";

import { expect } from "chai";

describe("logBetween(lowNum, highNum)", () => {
  it("returns an array of numbers inclusive from the lower number and highest number", () => {
    expect(logBetween(-1, 2)).to.deep.equal([-1, 0, 1, 2]);
    expect(logBetween(4, 6)).to.deep.equal([4, 5, 6]);
  });

  it("returns an empty array if the first argument is bigger than the second", () => {
    expect(logBetween(14, 6)).to.deep.equal([]);
  });
});
