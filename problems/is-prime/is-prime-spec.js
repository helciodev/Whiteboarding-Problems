import isPrime from "./is-prime.js";
import { expect } from "chai";

describe("isPrime(number)", () => {
  it("should return true if number is prime and false if not, assuming the number argument is a positive integer", () => {
    expect(isPrime(9)).to.be.false;
    expect(isPrime(2)).to.be.true;
    expect(isPrime(11)).to.be.true;
    expect(isPrime(2017)).to.be.true;
    expect(isPrime(10)).to.be.false;
  });
});
