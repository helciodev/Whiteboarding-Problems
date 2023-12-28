export default function mirrorArray(arr) {
  const revertedArr = [...arr].reverse();

  return [...arr, ...revertedArr];
}
