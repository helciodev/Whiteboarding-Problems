import lcm from "./lcm.js";
import { expect } from "chai";

describe("lcm(num1, num2) function", () => {
  it("should take two numbers num1 and num2 as arguments and return the lowest number that is a multiple of both numbers", () => {
    expect(lcm(2, 3)).to.eq(6); // => 6
    expect(lcm(6, 10)).to.eq(30); // => 30
    expect(lcm(24, 26)).to.eq(312); // => 312
  });
});
