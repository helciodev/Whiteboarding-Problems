import pairProduct from "./pair-product.js";
import { expect } from "chai";

describe("pairProduct(num, arr) function", () => {
  it("takes an array and a number as arguments and should return pair of indices whose elements multiply to num, no pair should appear twice", () => {
    expect(pairProduct([1, 2, 3, 4, 5], 4)).to.deep.eq([[0, 3]]);
    expect(pairProduct([1, 2, 3, 4, 5], 8)).to.deep.eq([[1, 3]]);
    expect(pairProduct([1, 2, 3, 12, 8], 24)).to.deep.eq([
      [1, 3],
      [2, 4],
    ]);
  });
});
