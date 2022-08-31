function calculateAverageAge(persons) {
  let somma=0;
  for (let i = 0; i < persons.length; i++) {
    somma= persons[i].age + somma;



  }
  return somma/ persons.length;

}


const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];
console.log(persons)
console.log(somma);






function calculateMinAge(people){
  const minAge=[];
  for (let i= 0; i < array.length; i++) {
    if(age<= 17){
      minAge.push(`${people[i].age}`)

    }
   
  }
  return minAge;
}
const minAge=(calculateMinAge(people));








 const people=[
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
]
console.log(minAge);