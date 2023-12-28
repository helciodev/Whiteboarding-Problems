import oddRange from "./odd-range.js";
import { expect } from "chai";

describe("oddRange(num)", () => {
  it("should return an array of odd numbers in the range of the num argument", () => {
    expect(oddRange(13)).to.deep.equal([1, 3, 5, 7, 9, 11, 13]);
    expect(oddRange(6)).to.deep.equal([1, 3, 5]);
  });
});
