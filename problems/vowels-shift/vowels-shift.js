function vowelShift(sentence) {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  const nextVowelObj = {
    a: "e",
    e: "i",
    i: "o",
    o: "u",
    u: "a",
  };

  for (let char of sentence) {
    if (vowels.includes(char)) {
      result += nextVowelObj[char];
    } else {
      result += char;
    }
  }

  return result;
}

console.log(vowelShift("bootcamp")); // => 'buutcemp'
console.log(vowelShift("hello world")); // => 'hillu wurld'
console.log(vowelShift("on the hunt")); // => 'un thi hant'
