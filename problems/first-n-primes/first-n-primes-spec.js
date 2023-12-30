import firstNPrimes from "./first-n-primes.js";
import { expect } from "chai";

describe("firstNPrimes(n)", () => {
  it("should return an array with first n prime numbers", () => {
    expect(firstNPrimes(1)).to.deep.equal([2]);
    expect(firstNPrimes(4)).to.deep.eq([2, 3, 5, 7]);
  });
});
