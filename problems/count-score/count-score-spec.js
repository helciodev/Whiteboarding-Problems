import countScore from "./count-score.js";
import { expect } from "chai";

describe("countScore(people) function", () => {
  it("should take an array of scores objects people as it input and return an object that has key-value pairs where each name is a key and the value is their total score", () => {
    const ppl = [
      { name: "Anthony", score: 10 },
      { name: "Fred", score: 10 },
      { name: "Anthony", score: -8 },
      { name: "Winnie", score: 12 },
    ];

    const peeps = [
      { name: "Anthony", score: 2 },
      { name: "Winnie", score: 2 },
      { name: "Fred", score: 2 },
      { name: "Winnie", score: 2 },
      { name: "Fred", score: 2 },
      { name: "Anthony", score: 2 },
      { name: "Winnie", score: 2 },
    ];

    expect(countScore(ppl)).to.deep.equal({ Anthony: 2, Fred: 10, Winnie: 12 });
    expect(countScore(peeps)).to.deep.equal({ Anthony: 4, Fred: 4, Winnie: 6 });
  });
});
