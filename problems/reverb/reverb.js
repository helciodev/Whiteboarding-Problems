function reverb(word) {
  const vowels = "aeiouAEIO";

  for (let i = word.length; i > 0; i--) {
    let char = word[i];
    if (vowels.includes(char)) {
      return word.slice(0) + word.slice(i);
    }
  }

  return word;
}
