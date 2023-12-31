export default function hipsterfyWord(word) {
  const vowels = "aeiouAEIOU";

  for (let i = word.length; i > 0; i--) {
    let char = word[i];
    if (vowels.includes(char)) {
      return word.slice(0, i) + word.slice(i + 1);
    }
  }
}
