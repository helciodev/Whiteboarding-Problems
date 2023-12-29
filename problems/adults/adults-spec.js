import adults from "./adults.js";
import { expect } from "chai";

describe("adults(people)", () => {
  it("should return a new array with the name of those whose age is bigger or equal to 18", () => {
    expect(
      adults([
        { name: "John", age: 20 },
        { name: "Jim", age: 13 },
        { name: "Jane", age: 18 },
        { name: "Bob", age: 7 },
      ])
    ).to.deep.equal(["John", "Jane"]);
  });
});
