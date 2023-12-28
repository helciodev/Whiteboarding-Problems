export default function maxValue(arr) {
  if (!arr.length) return null;

  let max = Math.max(...arr);

  //   for (let i = 0; i < arr.length; i++) {
  //     let currentNum = arr[i];

  //     if (currentNum > max) max = currentNum;
  //   }

  return max;
}
