const factorArray = function (arr, number) {
  return arr.filter((num) => number % num === 0);
};

export default factorArray;
