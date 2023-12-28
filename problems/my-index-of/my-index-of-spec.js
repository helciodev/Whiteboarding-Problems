import myIndexof from "./my-index-of.js";
import { expect } from "chai";

describe("myIndexOf(arr, target)", () => {
  it("should return the index of the target number argument if it exists in the arr argument or return -1 if it does not exist in the arr argument", () => {
    expect(myIndexof([1, 2, 3, 4], 4)).to.equal(3);
    expect(myIndexof([5, 6, 7, 8], 2)).to.equal(-1);
  });
});
