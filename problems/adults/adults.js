const adults = function (people) {
  return people
    .filter((person) => person.age >= 18)
    .map((person) => person.name);
};

export default adults;
