class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }
 
  

  
 }

  deposit(amount) {
    // throw an exception if amount is negative
    this.#amount += amount;
    console.log(amount)
  }

  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    this.#amount -= amount;
    if(amount > this.amount){
     console.log(amount)
    }
  }

  view() {
    console.log(this.#amount);
    
  }

  const errore= () =>{
    if

  }
  


const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();