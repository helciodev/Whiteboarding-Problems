import hipsterfy from "./hipsterfy.js";
import { expect } from "chai";

describe("hipsterfy(sentence) function", () => {
  it("should take a sentence as argument and return return an new sentence with last vowel of each word removed", () => {
    expect(hipsterfy("proper")).to.eq("propr");
    expect(hipsterfy("proper tonic panther")).to.equal("propr tonc panthr");
    expect(hipsterfy("towel flicker banana")).to.equal("towl flickr banan");
    expect(hipsterfy("runner anaconda")).to.equal("runnr anacond");
    expect(hipsterfy("turtle cheeseburger fries")).to.equal(
      "turtl cheeseburgr fris"
    );
  });
});
