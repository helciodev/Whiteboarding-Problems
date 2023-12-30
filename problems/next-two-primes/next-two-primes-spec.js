import nextTwoPrimes from "./next-two-primes.js";
import { expect } from "chai";

describe("nextTwoPrimes(num) function", () => {
  it("should return an array with next two prime number which are greater than num", () => {
    expect(nextTwoPrimes(2)).to.deep.equal([3, 5]);
    expect(nextTwoPrimes(3)).to.deep.equal([5, 7]);
    expect(nextTwoPrimes(7)).to.deep.equal([11, 13]);
    expect(nextTwoPrimes(8)).to.deep.equal([11, 13]);
    expect(nextTwoPrimes(20)).to.deep.equal([23, 29]);
    expect(nextTwoPrimes(97)).to.deep.equal([101, 103]);
  });
});
