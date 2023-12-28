export default function myIndexof(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    if (target === currentNum) return i;
  }
  return -1;
}
