import zipArray from "./zip-array.js";
import { expect } from "chai";

describe("zipArray(arr1, arr2", () => {
  it("should return a zipped array of the arr1 and arr2 argument arrays", () => {
    const a1 = ["a", "b", "c", "d"];
    const a2 = [10, 20, 30, 40];
    const result = zipArray(a1, a2);
    // result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
    expect(result).to.deep.equal([
      ["a", 10],
      ["b", 20],
      ["c", 30],
      ["d", 40],
    ]);
  });
});
