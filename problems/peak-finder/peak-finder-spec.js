import peakFinder from "./peak-finder.js";
import { expect } from "chai";

describe("peakFinder(arr) function", () => {
  it("should return an array with t should return an array containing the indices of all the peaks.", () => {
    expect(peakFinder([1, 2, 3, 2, 1])).to.deep.equal([2]);
    expect(peakFinder([2, 1, 2, 3, 4, 5])).to.deep.equal([0, 5]);
    expect(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])).to.deep.equal([2, 6, 8]);
  });
});
