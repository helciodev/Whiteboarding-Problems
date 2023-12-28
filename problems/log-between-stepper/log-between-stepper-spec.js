import logBetweenStepper from "./log-between-stepper.js";
import { expect } from "chai";

describe("logBetweenStepper(min, max, step)", () => {
  it("should return an array with numbers from min to max including min and max arguments at step intervals from the step argument ", () => {
    expect(logBetweenStepper(5, 9, 1)).to.deep.equal([5, 6, 7, 8, 9]);
    expect(logBetweenStepper(-10, 15, 5)).to.deep.eq([-10, -5, 0, 5, 10, 15]);
  });
});
