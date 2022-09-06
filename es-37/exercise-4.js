

class BankAccount{
    constructor( initialDeposit){
        this.valore=initialDeposit;
    }
    deposit(deposito){
      this.valore += deposito;
   }
   withdraw(prelievo){
    this.valore -= prelievo;
   // this.valore= this.valore - prelievo
   }
   view(){
    console.log(this.valore);
   }


}



const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
