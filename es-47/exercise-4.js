const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const log = { id, firstName, lastName, age } = person;

for (let element in log) {

  console.log(`${element} : ${log[element]}`);


}






// for (let item of Object.entries(person)) {
//   // console.log(`${item[0]}: ${item[1]}`);

