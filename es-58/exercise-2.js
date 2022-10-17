const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find((item) => item.id === id);

      if (person) {
        resolve(person);
      } else {
        reject("ciao");
      }
    }, 4000);
  });
}

// core here
fetchPersonById(1).then((pippo) => console.log(pippo));
fetchPersonById(2).then((pluto) => console.log(pluto));
fetchPersonById(3).then((tom) => console.log(tom));
fetchPersonById(4).catch((error) => console.log(error));
