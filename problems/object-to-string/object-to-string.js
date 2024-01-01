export default function objectToString(count) {
  let string = "";

  for (let key in count) {
    let value = count[key];
    let i = 0;

    while (i < value) {
      string += key;
      i++;
    }
  }

  return string;
}
