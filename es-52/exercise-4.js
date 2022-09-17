const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

function select(key,value){
  if( typeof value === 'string'){
    return undefined;
  }
  return value;

}
// const json = JSON.stringify(person, ['id','age']);
const json = JSON.stringify(person, select);




console.log( json); // Should return: { id: 1, age: 25 }