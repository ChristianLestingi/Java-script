function getKeys(obj) {
  const k=[];

  for (const key in person) {


    k.push(key)

    }
    return k;
  }



const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);