import factorArray from "./factor-array.js";
import { expect } from "chai";

describe("factorArray(arr, number)", () => {
  it("should return an array of all the factors for the number argument", () => {
    factorArray([2, 3, 4, 5, 6], 20); // => [2,4,5] factorArray([2,3,4,5,6],35) // => [5] factorArray([10,15,20,25],5) // => []
    expect(factorArray([2, 3, 4, 5, 6], 20)).to.deep.eq([2, 4, 5]);
    expect(factorArray([2, 3, 4, 5, 6], 35)).to.deep.eq([5]);
    expect(factorArray([10, 15, 20, 25], 5)).to.deep.eq([]);
  });
});
