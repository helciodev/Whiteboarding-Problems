import twoDiff from "./two-diff.js";
import { expect } from "chai";

describe("twoDiff(arr) function", () => {
  it("should return an two dimensional array where each of the sub array are indices of the two numbers such that their difference is 2 or an empty array", () => {
    const arr1 = [2, 3, 4, 6, 1, 7];
    const arr2 = [0, 2, 4, 3, 5];
    const arr3 = [];

    expect(twoDiff(arr1)).to.deep.equal([
      [0, 2],
      [1, 4],
      [2, 3],
    ]);
    expect(twoDiff(arr2)).to.deep.equal([
      [0, 1],
      [1, 2],
      [3, 4],
    ]);
    expect(twoDiff(arr3)).to.deep.equal([]);
  });
});
