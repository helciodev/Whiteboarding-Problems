function countRepeats(string) {
  let count = 0;
  let repeats = "";
  let nonRepeated = "";

  for (let char of string) {
    if (!nonRepeated.includes(char)) {
      nonRepeated += char;
    } else {
      if (!repeats.includes(char)) {
        repeats += char;
        count++;
      }
    }
  }
  return count;
}

console.log(countRepeats("calvin")); // => 0
console.log(countRepeats("caaaalvin")); // => 1
console.log(countRepeats("pops")); // => 1
console.log(countRepeats("mississippi")); // => 3
console.log(countRepeats("hellobootcampprep")); // => 4
