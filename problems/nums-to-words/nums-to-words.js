function numsToWords(numString) {
  const numsObj = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "sSix",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  };

  let result = "";

  for (let num of numString) {
    result += numsObj[num];
  }
  return result;
}

console.log(numsToWords("42")); // => 'FourTwo'
console.log(numsToWords("123")); // => 'OneTwoThree'
console.log(numsToWords("159598")); // => 'OneFiveNineFiveNineEight'
