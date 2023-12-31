export default function isPassing(assessments) {
  return (
    assessments.reduce((acc, currentObj) => (acc += currentObj.score), 0) >= 70
  );
}
