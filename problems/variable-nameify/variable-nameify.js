export default function variableNameify(words) {
  return words
    .map((word, i) =>
      i < 1
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
}
