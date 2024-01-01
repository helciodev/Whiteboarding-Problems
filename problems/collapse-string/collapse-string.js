function collapseString(str) {
  return str.split("").reduce((collapsedStr, currentChar) => {
    if (!collapsedStr.includes(currentChar)) collapsedStr += currentChar;
    return collapsedStr;
  }, str[0]);
}

console.log(collapseString("apple")); // => 'aple'
console.log(collapseString("AAAaalviiiiin!!!")); // => 'Aalvin!'
console.log(collapseString("hello app academy")); // => 'helo ap academy'
