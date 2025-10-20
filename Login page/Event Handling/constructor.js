// let student1 = {
//     name:'Ram',
//     age:17,
//     cousre:'IT',
//     roll:1,
//     printName() {
//         console.log(this.name);
//     },
// };
// let student2 = {
//     name:'shyam',
//     age:18,
//     course:'CSE',
//     roll:2,
// }
// function Student(name,age,course,roll){
// this.name = name;
// this.age = age;
// this.course = course;
// this.roll = roll;
// this.printName = function (){
//     console.log(this.name);
// }
// }
// let student3 = new Student('Hari', 19,'IT',3);
// console.log(student1);
// console.log(student2);
// console.log(student3);
// let student4 = new Student('sharda',21,'ECE',4);
// console.log(student4);
// student1.printName();
// //student2.printName();
// student3.printName();
// student4.printName();
// function User(name,age,email,isAdmin) {
//     this.name = name;

// }
// User constructor function
// function User(name,age,email,isAdmin){
//     this.name = name;
//     this.age = age;
// this.email = email;
// this.isAdmin = isAdmin;
// }  
// // Method to upadate user's admin status using prototype
// User.prototype.makeUserAdmin = function () {
//     this.isAdmin = true;
// };
// console.log(User.isAdmin);
// const user1 = new User("sharda jha",21,"shardakumari@gmail.com",false);
// console.log(user1);
class Animal {
    // constructor method
    constructor(name) {
        this.name = name;
    }
    // Method
    speak() {
        console.log(`${this.name} make a noise.`);
    }
}
// Create an instance of the class 
const animal = new Animal('Dog');
animal.speak();