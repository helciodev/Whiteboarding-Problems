import maxValue from "./max-value.js";
import { expect } from "chai";

describe("maxValue(arr)", () => {
  it("should return the highest number in the argument arr", () => {
    expect(maxValue([12, 6, 43, 2])).to.equal(43);
  });
  it("should return null if the argument arr is an empty array", () => {
    expect(maxValue([])).to.be.null;
  });
});
