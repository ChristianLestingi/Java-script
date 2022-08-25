// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  if(role==='ceo'){
    return 2200;
  }
  else if(role==='manager'){
    return 1800;

  }
  else if(role==='cto'){
    return 1800;

  }
  else if(role==='developer'){
    return 1500;

  }
  else{
    return 1000;

  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);

function calcolaStipendio( ruolo){
  if( ruolo==='dottore'){
    return  ruolo +='5000 euro';

  }
  else if (ruolo==='avvocato') {
    return  ruolo +='3000 euro';

  }
  else if (ruolo==='ingegnere'){
    return  ruolo +='3000 euro';
  }
  else{
        return ruolo += 1000;
  }
}

 const dottoreStipendio= calcolaStipendio('dottore');
  const avvocatoStipendio= calcolaStipendio('avvocato');
  const ingegnereStipendio= calcolaStipendio('ingegnere');
 const defaultStipendio=calcolaStipendio('default')

console.log(dottoreStipendio);
console.log(avvocatoStipendio);
console.log(ingegnereStipendio);
console.log(defaultStipendio);

