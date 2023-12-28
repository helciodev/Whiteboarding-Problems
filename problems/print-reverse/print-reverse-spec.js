import printInverse from "./print-reverse.js";

import { expect } from "chai";

describe("printReverse(min, max)", () => {
  it("should return an array of all numbers from max to min (exclusive), in reverse order", () => {
    expect(printInverse(13, 18)).to.deep.equal([17, 16, 15, 14]);
    expect(printInverse(90, 94)).to.deep.equal([93, 92, 91]);
    expect(printInverse(94, 90)).to.deep.eq([]);
  });
});
