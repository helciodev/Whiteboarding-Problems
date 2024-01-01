import variableNameify from "./variable-nameify.js";
import { expect } from "chai";
describe("variableNameify(words) function", () => {
  it("should take an array of words and return a string", () => {
    expect(variableNameify(["is", "prime"])).to.equal("isPrime");

    expect(variableNameify(["remove", "last", "vowel"])).to.equal(
      "removeLastVowel"
    );
    expect(variableNameify(["MaX", "VALUE"])).to.equal("maxValue");
  });
});
