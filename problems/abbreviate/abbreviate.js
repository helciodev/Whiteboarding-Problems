function vowelsRemover(word) {
  let newWorld = "";
  const vowels = ["a", "e", "i", "o", "u"];

  for (let char of word) {
    if (!vowels.includes(char)) newWorld += char;
  }

  return newWorld;
}

export default function abbreviate(sentence) {
  const sentenceSplitted = sentence.split(" ");
  return sentenceSplitted
    .map((word) => (word.length > 4 ? vowelsRemover(word) : word))
    .join(" ");
}
