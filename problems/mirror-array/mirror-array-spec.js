import mirrorArray from "./mirror-array.js";
import { expect } from "chai";

describe("mirrorArray(arr)", () => {
  it('should return  a new array "mirrored" as shown in the example [1,2,3]  => [ 1, 2, 3, 3, 2, 1 ]', () => {
    expect(mirrorArray([1, 2, 3])).to.deep.equal([1, 2, 3, 3, 2, 1]);
    expect(mirrorArray(["a", "b", "c", "d"])).to.deep.equal([
      "a",
      "b",
      "c",
      "d",
      "d",
      "c",
      "b",
      "a",
    ]);
  });
});
