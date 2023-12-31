export default function valueConcat(arr, obj) {
  return arr.map((el) => (obj[el] ? el + obj[el] : el));
}
