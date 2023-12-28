function logBetweenStepper(min, max, step) {
  const result = [];

  for (let i = min; i <= max; i += step) {
    result.push(i);
  }

  return result;
}

export default logBetweenStepper;
