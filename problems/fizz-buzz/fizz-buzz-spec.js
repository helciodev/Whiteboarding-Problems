import fizzBuzz from "./fizz-buzz.js";

import { expect } from "chai";

describe("fizzBuzz(max)", () => {
  it("should return an array of every number from 0 to max that is divisible by either 3 or 5, but not both.", () => {
    expect(fizzBuzz(20)).to.deep.equal([3, 5, 6, 9, 10, 12, 18]);
  });
});
