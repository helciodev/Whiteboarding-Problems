export default function elementCount(array) {
  return array.reduce((obj, currentEl) => {
    if (!obj[currentEl]) {
      obj[currentEl] = 1;
    } else {
      obj[currentEl] += 1;
    }
    return obj;
  }, {});
}
