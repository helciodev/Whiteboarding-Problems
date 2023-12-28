function logBetween(lowNum, highNum) {
  const result = [];

  if (lowNum > highNum) return [];

  for (let i = lowNum; i <= highNum; i++) {
    result.push(i);
  }

  return result;
}

export default logBetween;
