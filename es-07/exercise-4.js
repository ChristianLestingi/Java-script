// function nicknameMap(persons) {
//   const nicknames = [];
//   for (let i = 0; i < persons.length; i++) {
//     nicknames.push(`${persons[i].name}-${persons[i].age} `)
//   }
//   return nicknames;
// }

// const persons = [
//   { name: 'Paul', age: 16 },
//   { name: 'George', age: 17 },
//   { name: 'Lucas', age: 21 },
//   { name: 'Marco', age: 32 },
//   { name: 'Peter', age: 18 },
//   { name: 'Carl', age: 13 },
//   { name: 'Simon', age: 24 },
//   { name: 'Mark', age: 15 },
//   { name: 'Sandra', age: 34 },
//   { name: 'Alice', age: 28 }
// ];

// const nicknames = nicknameMap(persons);
// console.log(persons);
// console.log(nicknames);

function minAge(età) {
  const minorenni = [];
  for (let i = 0; i < età.length; i++) {
    if (età[i].age <= 18) {
      minorenni.push(età[i].name);

    }
    return minorenni;
  }
}
const età = [
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

const minorenni = minAge(età);
console.log(età);
console.log(minorenni);

let particolarità='bellezza';

const animal={
  razza : 'ornitorinco',
  età: 20,
  altezza:'50 cm',
  [particolarità]:'bruttino',

  call : function(){
    return ` che bel ${this.razza} di ${this.età} anni, alto ${this.altezza} e un po ${this.bellezza}`;
  },
  reCall(){
    return` ma che ${this.razza}`;
  }
};

console.log(animal.call());
console.log(animal.reCall());
 // in
if( 'bellezza' in animal){
  console.log('bellezza è presente in animal');
}

// clonare un oggetto per modificarne un valore

 let newAnimal= animal;
newAnimal.razza='castoro';
console.log( newAnimal.razza);
console.log( animal.razza);
console.log(animal);

newAnimal.razza=' foca';
console.log( animal);

 let  cloneAnimal= Object.assign({}, animal);

 console.log(cloneAnimal);

 cloneAnimal.razza='serpente';
 console.log(cloneAnimal);

 // costruttore
 
 function Car( marca,colore){
  this.marca= marca;
  this.colore= colore;
   this.assign= function(){
  
    return ` è una bellissima ${this.marca} di color ${this.colore}`;

   }
 }
let car= new Car('audi','gialla');
console.log(car);

// oggetti nidificati

let newCar0={
  marca : 'peugeot',
  colore: ' grey',
   optional: {
    cofano: 'automatico',
    ricarica:'wireles'
   }
}

console.log(newCar0.optional.ricarica);
if( newCar0.colore){
  console.log(newCar0.marca);
}

if( newCar0.marca && newCar0.colore && newCar0.optional &&  newCar0.optional.cofano){
 console.log( newCar0);

}
// optional change
let find= newCar0?.marca?.colore?.optional;
console.log( find); 
// da chiedere ,non chiaro

// keys,entries,values;
// keys= chiavi;
// values = valori
// entries= keys + values
 console.log(Object.keys(newCar0));
 console.log(Object.values(newCar0));
 console.log(Object.entries(newCar0));
