export default function countInnerElement(arr) {
  const countInnerElObj = {};

  for (let i = 0; i < arr.length; i++) {
    let currentInnerArray = arr[i];

    for (let j = 0; j < currentInnerArray.length; j++) {
      let currentInnerArrEl = currentInnerArray[j];
      if (!countInnerElObj[currentInnerArrEl]) {
        countInnerElObj[currentInnerArrEl] = 1;
      } else {
        countInnerElObj[currentInnerArrEl]++;
      }
    }
  }

  return countInnerElObj;
}
