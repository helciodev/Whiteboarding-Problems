import divisibleByThreePairSum from "./divisible-by-three-pair-sum.js";
import { expect } from "chai";

describe("divisibleByThreePairSum(arr)", () => {
  it("should return an array of all the pairs of indices, whose elements sum to a multiple of three", () => {
    expect(divisibleByThreePairSum([1, 6, 3, 4, 2, 0])).to.deep.equal([
      [0, 4],
      [1, 2],
      [1, 5],
      [2, 5],
      [3, 4],
    ]);
    expect(divisibleByThreePairSum([8, 3, 5, 9, 2])).to.deep.equal([[1, 3]]);
  });
});
