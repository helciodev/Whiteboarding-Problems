import hipsterfyWord from "./hipsterfy-word.js";
import { expect } from "chai";

describe("hipsterfyWord(word) function", () => {
  it("takes a word as argument and returns the last vowel removed", () => {
    expect(hipsterfyWord("proper")).to.equal("propr"); // => 'propr'
    expect(hipsterfyWord("tonic")).to.eq("tonc"); // => 'tonc'
    expect(hipsterfyWord("PANTHER")).to.equal("PANTHR"); // => 'PANTHR'
    expect(hipsterfyWord("BACKWARDS")).to.equal("BACKWRDS"); // => 'BACKWRDS'
  });
});
