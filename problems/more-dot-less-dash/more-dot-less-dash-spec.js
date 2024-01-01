import moreDotLessDash from "./more-dot-less-dash.js";
import { expect } from "chai";

describe("moreDotsLessDash(str) function", () => {
  it("should take a string as argument and return true if the string has more dots `.` than dashes `-` otherwise return false", () => {
    expect(moreDotLessDash("2-D arrays are fun. I think.")).to.be.true;
    expect(moreDotLessDash(".-.-.")).to.be.true;
    expect(moreDotLessDash(".-")).to.be.false;
    expect(moreDotLessDash("..--")).to.be.false;
  });
});
