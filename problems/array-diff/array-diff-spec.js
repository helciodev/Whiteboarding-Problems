import arrayDiff from "./array-diff.js";
import { expect } from "chai";

describe("arrayDiff(arr1, arr2)", () => {
  it("it should take two arrays as arguments and return a new array containing the elements in the arr1 argument that not also in arr2", () => {
    const array1 = [1, 23, 2, 43, 3, 4];
    const array2 = [3, 23];
    const array3 = ["a", "ab", "c", "d", "c"];
    const array4 = ["d"];

    expect(arrayDiff(array1, array2)).to.deep.equal([1, 2, 43, 4]);
    expect(arrayDiff(array3, array4)).to.deep.equal(["a", "ab", "c", "c"]);
  });
});
