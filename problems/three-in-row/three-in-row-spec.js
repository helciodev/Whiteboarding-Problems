import threeInARow from "./three-in-row.js";
import { expect } from "chai";

describe("threeInARow(arr) function", () => {
  it("should take an array as argument and return true if the array contains e of the same numbers consecutively otherwise return false", () => {
    expect(threeInARow([4, 3, 7, 7, 7, 13, 8])).to.be.true;
    expect(threeInARow([10, 9, 20, 33, 3, 3])).to.be.false;
  });
});
