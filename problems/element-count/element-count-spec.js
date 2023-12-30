import elementCount from "./element-count.js";
import { expect } from "chai";

describe("elementCount(arr) function", () => {
  it("should return an object where each key corresponds to the element in the array and the value corresponds to how many times the element appears in the array", () => {
    expect(elementCount(["a", "a", "b", "b"])).to.deep.equal({ a: 2, b: 2 });
    expect(elementCount(["c", "a", "c", "a", "b"])).to.deep.equal({
      c: 2,
      a: 2,
      b: 1,
    });
  });
});
