function intersect(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    let currentArr1Element = arr1[i];

    for (let j = 0; j < arr2.length; j++) {
      let currentArr2Element = arr2[j];
      if (currentArr1Element === currentArr2Element) {
        result.push(currentArr2Element);
      }
    }
  }

  return result;
}

export default intersect;
