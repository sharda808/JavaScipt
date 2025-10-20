class Cat { 
constructor(name) {
    this.name = name;
    this.legs = 4;
}
move(){
    console.log(`the Cat is moving on ${this.legs} four legs.`)
}
speak(){
    console.log(`${this.name} makes a noise`);
}
}
let smriti = new Cat("Smriti");
smriti.move();
smriti.speak();
class Lion extends Cat {
    constructor(name,color){
            super(name);
        this.color = color;

}
eat () {
    console.log(`${this.name} eats meat`);
}
speak() {
    console.log(`${this.name} roars`);
}
}
let simba = new Lion("Simba");
simba.move();
simba.speak();
simba.eat();
class AccountHolder {
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.accountBalance = 0;
    }
    static getRateOfInterest = 4;
    static getRateOfInterest() {
 console.log(`Rate of interest is${this.getRateOfInterest} %`);
    }
    credit(amount) {
        this.accountBalance+=amount;
    }
    debit(amount){
        this.accountBalance-=amount;
    }
   getAccountBalance () {
console.log(`${this.firstName + ' ' + this.
    lastName}'s  account balance is ${this.accountBalance}`);

 
   }
}
let sharda = new AccountHolder("sharda", "jha");
sharda.getAccountBalance();
sharda.credit(1000);
sharda.debit(200);
sharda.getAccountBalance();
// AccountHolder.getRateOfInterest();
