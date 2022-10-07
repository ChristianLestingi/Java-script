function sumUntil(maxValue) {
  numbers=[];
  baseNum=1;
  do { numbers.push(baseNum);
    baseNum++ ;
  } while ( baseNum <= maxValue);
 let somma=0;
  for( let i=0;i<numbers.length; i++ ){
    somma +=numbers[i];
    }
    return  somma;
}

console.log(sumUntil(5));
