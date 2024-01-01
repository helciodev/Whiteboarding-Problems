export default function moreDotLessDash(str) {
  let dots = 0;
  let dashes = 0;

  for (let char of str) {
    if (char === ".") {
      dots++;
    } else if (char === "-") {
      dashes++;
    }
  }

  return dots > dashes;
}
