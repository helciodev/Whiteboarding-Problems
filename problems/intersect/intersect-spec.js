import intersect from "./intersect.js";
import { expect } from "chai";

describe("intersect(arr1, arr2)", () => {
  it("should return a new array containing the elements common to both arr1 and arr2", () => {
    expect(intersect(["a", "b", "c", "d"], ["b", "d", "e"])).to.deep.equal([
      "b",
      "d",
    ]);
    expect(intersect([("a", "b", "c")], ["x", "y", "z"])).to.deep.equal([]);
  });
});
