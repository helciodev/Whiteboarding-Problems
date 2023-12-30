export default function zipArray(arr1, arr2) {
  // assuming both arrays are the same length won't need to iterate through every element of the second array

  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    let arr1CurrentEl = arr1[i];
    let arr2CurrentEl = arr2[i];

    result.push([arr1CurrentEl, arr2CurrentEl]);
  }

  return result;
}
