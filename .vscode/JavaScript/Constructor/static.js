class AccountHolder {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.accountBalance = 0;

  }
  static rateofInterest= 4;
  static getRateofInterest() {
    console.log(`Rate of interest is ${this.rateofInterest}%`);
  }
  credit(amount) {
    this.accountBalance += amount;
  }
  debit(amount) {
    this.accountBalance -= amount;
    }

  getAccountBalance(){
    console.log(`${this.firstName + ' ' + this.lastName}'s This account balance is ${this.accountBalance}`);
  }
}
let smriti = new AccountHolder("Smriti", "Cat");
smriti.getAccountBalance();
smriti.credit(1000);
smriti.debit(200);
smriti.getAccountBalance();
// smriti.getRateofInterest();
// static only call class not call for object
AccountHolder.getRateofInterest();
// static methods are called on the class directly , without needing to ceate an instance