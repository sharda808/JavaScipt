// let even = [2,4,6,8,10];
//  let first = even[0];
//  let second = even[1];
// let [first,second, ...last] = even;

// console.log('first',first);
// console.log('second',second);
// console.log('last',last);
// kisi bhi function ko  kisi aur function m as a argumnet pass kr diye jaiye to 
// use callbacks kehte hai
// function greeting(name){
//     console.log('Hello ' + name);
    
// }

// function capitalize(name){
// let upper  = name.toUpperCase();
// console.log(upper);
// }
// function processUserInput(process) {
// let studentName = prompt('enter your name: ');
// process(studentName);
// }
// processUserInput(greeting);
// processUserInput(capitalize);
// anonymous function
// let hello = function(name){
//     console.log('Hello ' + name);
// }
// console.log(hello('sharda'));
// const add = function(a,b){
//     return a+b;
// };
// console.log(add(2,3));
let myFunction = function(){
    console.log('I am an anonymous function');
}
myFunction();
 setTimeout(function(){
    console.log('I am an anonymous function');},3000);
