export default function lcm(num1, num2) {
  const multiplyNums = num1 * num2;

  for (let i = 1; i <= multiplyNums; i++) {
    if (i % num1 === 0 && i % num2 === 0) return i;
  }
}
