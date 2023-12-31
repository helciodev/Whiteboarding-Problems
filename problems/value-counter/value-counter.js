export default function valueCounter(obj, val) {
  let count = 0;

  for (let key in obj) {
    let value = obj[key];
    if (val === value) count++;
  }

  return count;
}
