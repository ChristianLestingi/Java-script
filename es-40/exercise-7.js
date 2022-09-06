class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;


  }


  get useName() {
    return this.firstName
  }
  set useName(firstName){
    this.firstName=firstName;
  }

  get useLastName() {
    return this.lastName
  }
  set useLastName(lastName){
    this.lastName=lastName;
  }
  get useAge() {
    return this.age
  }
  set useAge(age){
    this.age=age;
  }
  get fullName(){
    return `${this.firstName} ${this.lastName}`
  }
   

}


const person = new Person('Mario', 'Rossi', 25);

console.log(person.fullName);

person.firstName = 'Maria';


person.lastName = 'Verdi';


//

console.log(person.fullName);

const student={
  name : 'Christian'
  
}

Object.defineProperty( student ,'getName',{
 get : function () {
  return this.name
 }


})

console.log(student.name);

Object.defineProperty( student,'setName',{
  set : function( newName){
    this.name=newName;

  }
})

student.newName='giancluca';
console.log( student.newName);


