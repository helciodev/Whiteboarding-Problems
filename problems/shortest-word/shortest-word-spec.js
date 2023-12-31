import shortestWord from "./shortest-word.js";
import { expect } from "chai";

describe("shortestWord(sentence) function", () => {
  it("takes a sentence and returns the shortest word in that sentence", () => {
    expect(shortestWord("app academy is cool")).to.be.equal("is"); // => 'is')
    expect(shortestWord("programming bootcamp")).to.eq("bootcamp"); // => 'bootcamp')
  });
});
