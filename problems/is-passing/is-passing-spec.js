import isPassing from "./is-passing.js";
import { expect } from "chai";

describe("isPassing(assessments) function", () => {
  it("should take an array of assessments objects and return true if the average score assessment is at least 70 and return false otherwise", () => {
    const assessments1 = [
      { number: 1, score: 60 },
      { number: 2, score: 90 },
      { number: 3, score: 80 },
      { number: 4, score: 100 },
      { number: 5, score: 85 },
    ];

    const assessments2 = [
      { number: 1, score: 60 },
      { number: 2, score: 20 },
      { number: 3, score: 45 },
    ];
    expect(isPassing(assessments1)).to.be.true; // => true

    expect(isPassing(assessments2)).to.be.true; // => false
  });
});
