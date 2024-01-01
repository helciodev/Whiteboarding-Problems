function mindPsAndQs(str) {
  let streak = 0;
  let max = 0;
  for (let i = 0; i <= str.length; i++) {
    let currentLetter = str[i];

    if (currentLetter === "P" || currentLetter === "Q") {
      streak++;
    } else {
      if (streak > max) max = streak;
      streak = 0;
    }
  }
  return max;
}
