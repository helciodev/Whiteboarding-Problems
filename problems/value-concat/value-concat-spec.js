import valueConcat from "./value-concat.js";
import { expect } from "chai";

describe("valueConcat(arr, obj) function", () => {
  it(`should take an array and an object as arguments and return  a new array where each element is concatenated with it's corresponding value from the object`, () => {
    const arr = ["alex", "maurice", "meagan", "ali"];
    const obj = { alex: "bronca", ali: "harris" };
    expect(valueConcat(arr, obj)).to.deep.equal([
      "alexbronca",
      "maurice",
      "meagan",
      "aliharris",
    ]);

    expect(valueConcat(["a", "b", "c"], { b: 2, c: 3 })).to.deep.equal([
      "a",
      "b2",
      "c3",
    ]);
  });
});
