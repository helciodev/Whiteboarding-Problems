export default function countScore(people) {
  return people.reduce((persons, currentPerson) => {
    let key = currentPerson.name;
    let score = currentPerson.score;
    if (!persons[key]) {
      persons[key] = score;
    } else {
      persons[key] += score;
    }

    return persons;
  }, {});
}
