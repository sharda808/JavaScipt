// console.log('Events');
// let clickHandler = () => {
//     console.log('Button clicked');
// }
// let buttonClickHandler = () => {
//     for(let i=0; i<5; i++){
//         console.log(i);
//     }
// }
// let button = document.getElementById('myButton');
// // Using Event Handler
// // button.onclick = buttonClickHandler;
// // button.onclick = clickHandler;
// // Using Event listener
// button.addEventListener('click',clickHandler);
// button.addEventListener('click',clickHandler);
// button.addEventListener('click',buttonClickHandler);
const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');
outer.addEventListener('click', () => {
    console.log('outer');
},/*true*/);
inner.addEventListener('click',(event) => {
    console.log('inner');
   event.stopPropagation();
 });
// inner.addEventListener('click',clickHandler);
const user1 = {
    name:"sharda jha",
    age:21,
    email:"shardakumari@gmail.com",
    isAdmin:false,
};
function makeUserAdmin(user) {
    user.isAdmin = true;
}
makeUserAdmin(user1);
console.log(user1.isAdmin);
let student1 = {
    name:'sharda',
    age:21,
    course:'CSE',
    roll:1,
    printName() {
        console.log(this.name);
    }
}
let student2 = {
    name:'Aditi',
    age:21,
    course:'ECE',
    roll:2,
}
function Student(name,age,course,roll) {
this.name = name;
this.age = age;
this.course = course;
this.roll = roll;
this.printName = function (){
  console.log(this.name); 
}

}
let student3 = new Student('Hari',19,'IT',3);
console.log(student1);
console.log(student2);
console.log(student3);
let student4 = new Student('Anshika',20,'ECE',4);
console.log(student4);
student1.printName();
// student2.printName();
student3.printName();
student4.printName();
function User(name,age,email,isAdmin) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.isAdmin = isAdmin;

}
User.prototype.makeUserAdmin = function (){
    this.isAdmin = true;
};
// creat user1 object using the user constructor
const user5 = new User("sharda",false);
user5.makeUserAdmin();
console.log(user5);
console.log(user5.isAdmin);
class student {

constructor(name,age,course,roll) {
this.name = name;
this.age = age;
this.course = course;
this.roll = roll;
}
printName = function (){
  console.log(this.name); 
}

}
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak(){
        
    }
}