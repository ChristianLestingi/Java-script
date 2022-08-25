function adultFilter(persons) {
  const adult = [];
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
      adult.push(persons[i]);
    }


  }
  return adult;
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

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);

function richFilter(richs) {
  const superRichs = [];
  for (let i = 0; i < richs.length; i++) {
    if (richs[i].money >= 100000) {
      superRichs.push(richs[i]);
    }
  }
  return superRichs;

}

const richs = [
  { name: 'Berlusconi', money: 300000 },
  { name: 'Galeazzi', money: 30000 },
  { name: 'Elon Musk', money: 3000000 },

];

const richsSuper = richFilter(richs);
console.log(richs);
console.log(richsSuper);

function amazonList(product) {
  const products = [];
  for (let i = 0; i < array.length; products++) {
    if (product[i] == 'samsung galaxy s22ultra') {
      return product;

    }
    else {
      console.log('non è disponibile')
    }
  };



}

const products =
  [
    'iphone 13',
    ' xiamo t9',
    'lollipop',
    'samsung galaxy s22ultra'
  ]

// conversione di tipi

boolValue = true;
console.log(typeof boolValue);


boolValue = String(boolValue);
console.log(typeof boolValue);

// while
let counter = 0;
while (counter < 10) {
  console.log('valore di counter (while)', counter);
  counter++;
}

//do while

counter = 0;
do {
  console.log('valore di counter (do,while)', counter);
  counter++;

} while (counter === 0);

// ciclo for
for (let counter = 0; counter < 10; counter++) {
  console.log(' valore di counter( ciclo for', counter);

}

// bloccare un ciclo con break;

for (let counter = 0; counter < 10; counter++) {
  if (counter === 5) break;
  console.log(' valore di counter(break) ', counter);

}
// continue
for (let counter = 0; counter < 10; counter++) {
  if (counter === 5) continue; {
    console.log(' valore di counter(continue)', counter);
  }
}
// opereatori or || not !! o and &&

const naame = 'Christian';
const isMan = true;

if (naame === 'Biello' || naame === 'babbo' || isMan) {
  console.log(' il mio nome è Christian');
}


const anotherName = false;
console.log(anotherName) || console.log('nonono');

result = isMan && null & naame;
console.log(result);

function frollo() {
  return 'batman';
}
frollo();

function getAnotheHero(hero = 'comedian') {
  console.log(`the ${hero}`);
}
getAnotheHero('batman');


function firstPartner() {
  let partner = 'robin';
  return (` the best ${partner}`);
}
firstPartner();

const lista = ['mario', 'giacomo', 'francesco'];
newName = 'luca';
lista.push('luca');
console.log(lista);
//function expression

const anotherhero = function () {
  return ('robin');
};

anotherhero();
// callbacks


function superHero(hero) {
  console.log(` aiutami ${hero}`);
}


function callBestHero(caller) {
  const hero = 'batman';
  if (hero === 'batman') {
    caller(hero);


  }
}
callBestHero(superHero);// come parametro la funzione precedente
// altro esempio

function car(auto) {
  console.log(` bella ${auto}`);
}

function call(caller) {
  const auto = 'peugeot';
  caller(auto);
}

call(car);



// arrow function senza parametro
const arrow = () => {
  console.log('questa è una arrow function');
}
arrow();
// arrow function con parametro

const newArrow = nuova => console.log(`${nuova} questa è una arrow function`);

newArrow('anche');


// scope approfondimento

let villain = 'Joker'

if (true) {
  console.log(villain);//joker
  villain = 'three faces';
  console.log(villain); // three faces

}

console.log(villain);// three faces
// il var funziona diversamente;

var cattivo = 'pinguino';
if (true) {
  console.log(cattivo);
  cattivo = ' catwoman';
  console.log(cattivo);

}

console.log(cattivo);


// lexical scope e closure

function call(chiama, hero) {
  function chiamata() {
    return ` ${chiama}${hero}`;
  }
  console.log(chiamata());
}
call('vieni', 'batman');
call('era ora', 'robin');

// closure
function add(nome) {
  return function (cognome) {
    return ` ${nome}${cognome}`;

  }

}
addName = add('christian');

console.log(addName(' lestingi'));


function acquisto(gatto){
  return function(razza){
    return `ho comprato un ${gatto} ${razza}`;
  }
}

acquisti=acquisto('gattino');
console.log(acquisti('siamese'));
