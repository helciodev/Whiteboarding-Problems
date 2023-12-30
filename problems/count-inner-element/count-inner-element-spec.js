import countInnerElement from "./count-inner-element.js";
import { expect } from "chai";

describe("countInnerElement(arr)", () => {
  it("should return an object with element as key and how many times it repeats as value", () => {
    const arr1 = [
      [1, 2, 4, 5],
      [2, 7, 4],
      [1, 4, 5, 2, 7],
    ];
    const arr2 = [
      ["a", "b", "c", "d"],
      ["a", "b"],
      ["a", "c", "d", "a"],
    ];

    expect(countInnerElement(arr1)).to.deep.equal({
      1: 2,
      2: 3,
      4: 3,
      5: 2,
      7: 2,
    });
    expect(countInnerElement(arr2)).to.deep.equal({ a: 4, b: 2, c: 2, d: 2 });
  });
});
