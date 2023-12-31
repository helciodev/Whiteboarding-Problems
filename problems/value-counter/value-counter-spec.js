import valueCounter from "./value-counter.js";
import { expect } from "chai";

describe("valueCounter(obj, val)", () => {
  it("should take an object and a value as arguments and return the number of times val repeats as a value in obj", () => {
    const obj1 = { 1: "Anne", 2: "Alvin", 3: "Anne", 4: "Anne" };
    const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 };
    const pairs = { Anne: "Roman", Alvin: "Roman", JJ: "Anne", Roman: "Anne" };

    expect(valueCounter(obj1, "Anne")).to.equal(3); // => 3

    expect(valueCounter(obj2, 88)).to.equal(0); // => 0

    expect(valueCounter(pairs, "Roman")).to.equal; // => 2
  });
});
