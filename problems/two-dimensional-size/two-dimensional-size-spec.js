import twoDimensionalSize from "./two-dimensional-size.js";
import { expect } from "chai";

describe("twoDimensionalSize(arr) function", () => {
  it("it should take an two dimensional array as an argument and return the total number of elements", () => {
    const arr1 = [
      [1, 2, 3],
      [4, 5],
      [6, 7, 8, 9],
    ];
    const arr2 = [["a"], ["b", "c", "d", "e"]];
    expect(twoDimensionalSize(arr1)).to.equal(9); // => 9

    expect(twoDimensionalSize(arr2)).to.equal(5); // => 5
  });
});
