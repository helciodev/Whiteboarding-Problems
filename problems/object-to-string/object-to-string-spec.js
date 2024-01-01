import objectToString from "./object-to-string.js";
import { expect } from "chai";

describe("objectToString(count) function", () => {
  it("should take an object as argument and return a string with each key as many times it value in the object", () => {
    expect(objectToString({ a: 2, b: 4, c: 1 })).to.equal("aabbbbc");
    expect(objectToString({ b: 1, o: 2, t: 1 })).to.equal("boot");
  });
});
