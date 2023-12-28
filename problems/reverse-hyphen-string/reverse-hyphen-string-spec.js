import reverseHyphenString from "./reverse-hyphen-string.js";
import { expect } from "chai";

describe("reverseHyphenString(str)", () => {
  it("should return the str argument string reversed with every word separated with hyphens", () => {
    expect(reverseHyphenString("Go-to-the-store")).to.equal("store-the-to-Go");
    expect(reverseHyphenString("Jump,-jump-for-joy")).to.equal(
      "joy-for-jump-Jump,"
    );
  });
});
