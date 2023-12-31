import longWordCount from "./long-word-count.js";
import { expect } from "chai";

describe("longWordCount(string) function", () => {
  it("should take a string as an argument and return return the number of words longer than 7 characters", () => {
    expect(longWordCount("")).to.eq(0);
    expect(longWordCount("short words only")).to.equal(0);
    expect(longWordCount("one reallylong word")).to.equal(1);
    expect(longWordCount("two reallylong words inthisstring")).to.equal(2);
    expect(longWordCount("allwordword longwordword wordswordword")).to.equal(3);
    expect(longWordCount("seventy schfifty five")).to.equal(1);
  });
});
