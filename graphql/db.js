export const people = [
  {
    id: 1,
    name: `Kim`,
    age: 19,
    gender: `male`,
  },
  {
    id: 2,
    name: `Kim`,
    age: 19,
    gender: `male`,
  },
  {
    id: 3,
    name: `Kim`,
    age: 19,
    gender: `male`,
  },
  {
    id: 4,
    name: `Kim`,
    age: 19,
    gender: `male`,
  },
  {
    id: 5,
    name: `Kim`,
    age: 19,
    gender: `male`,
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
