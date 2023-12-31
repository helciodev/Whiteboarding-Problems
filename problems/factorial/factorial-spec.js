import factorial from "./factorial.js";
import { expect } from "chai";

describe("factorial(n) function", () => {
  it("should take a number as argument and return its factorial", () => {
    expect(factorial(1)).to.be.equal(1);
    expect(factorial(4)).to.be.equal(24);
    expect(factorial(5)).to.be.equal(120);
    expect(factorial(10)).to.be.equal(3628800);
  });
});
