export default function longWordCount(string) {
  if (!string.length) return 0;

  return string.split(" ").filter((word) => word.length > 7).length;
}
