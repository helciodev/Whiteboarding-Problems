import hipsterfyWord from "../hipsterfy-word/hipsterfy-word.js";
export default function hipsterfy(sentence) {
  return sentence
    .split(" ")
    .map((word) => hipsterfyWord(word))
    .join(" ");
}
