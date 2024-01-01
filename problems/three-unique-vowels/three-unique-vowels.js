function threeUniqueVowels(string) {
  let uniqueVowels = "";

  const vowels = "AEIOUaeiou";

  for (let letter of string) {
    if (vowels.includes(letter) && !uniqueVowels.includes(letter))
      uniqueVowels += letter;
  }

  return uniqueVowels.length >= 3 || false;
}

console.log(threeUniqueVowels("delicious")); // => true
console.log(threeUniqueVowels("the bootcamp")); // => true
console.log(threeUniqueVowels("bootcamp")); // => false
console.log(threeUniqueVowels("dog")); // => false
console.log(threeUniqueVowels("go home")); // => false
