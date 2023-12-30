import twoDimensionalTotal from "./two-dimensional-total.js";
import { expect } from "chai";

describe("twoDimensionalTotal(arr) func", () => {
  it("should return the total sum of all elements", () => {
    const arr1 = [
      [5, 2, 5, 3],
      [12, 13],
    ];
    const arr2 = [[2], [1, 9], [1, 1, 1]];

    expect(twoDimensionalTotal(arr1)).to.equal(40); // => 40
    expect(twoDimensionalTotal(arr2)).to.equal(15); // => 15
  });
});
