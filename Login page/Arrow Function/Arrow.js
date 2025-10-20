// // Normal function
// function add1(a,b){
//     return a + b;
// }
// console.log((add1(4,5)));
// //Anonymous function
// const add2 = function(a,b){
//     return a + b;
// }
// console.log(add2(5,6));
// //Arrow function
// const add3 = (a,b) => {
//    return a + b;
// }
// console.log(add3(2,-7));
// const square = num => {
//     return num * num;
// }
// console.log(square(8));
// const square1 = num => num * num;

// console.log(square1(9));
// //Appliaction with Array
// const numbers = [2,4,6,8,10];
// let squares = numbers.map(function(num){
//     return num * num;
// });
// let squares1 = numbers.map(num => num * num);
// console.log(squares1);
// const doubleArrow = numbers.map((num) => num * 2);
// console.log('doubled with arrow:',doubleArrow);
// Higher order function 
// one function  as an argument to another function
// const createDouble = () => {//outer function

 
//  return num => num * 2;
// }
// const createDouble2 = () => {
//     return function (num) {
// return num * 2;
//     };
// }
// const twice = createDouble();
// const thrice = createDouble2();
// console.log(thrice(2));
// console.log(twice(9));
// console.log(createDouble()(78));
// console.log(createDouble()(5));
// function createAdder(x) {
//     return function(y) {
//         return x + y;
//     };
// }
// const addFive = createAdder(5);
// console.log(addFive(10));
// let first = 45;//Global variable
// let outer = (outerArg) => {
// const outerConst = 3.14;
// let inner = (innerArg) => {
//     const innerConst = 2.71;
//     console.log(`first:${first}`);
// console.log(`outerArg:${outerConst}`);
//  console.log(`outerArg:${outerArg}`);
//  console.log(`innerArg:${innerArg}`); 
//   console.log(`innerArg:${innerConst}`);  
// };
// console.log(`outer first: ${first}`);
// console.log(`outer outerArg:${outerArg}`);
// console.log(`outer outerConst:${outerConst}`);
// return inner;// outer function retrun
// }
// outer(78)(90);
// function outerFunction() {
//     const outerVariable = 'I am outside';
// function innerFunction() {
//  console.log(outerVariable);//access outerVariable from outerfunction's scope

// }   
// return innerFunction;
// }
// const closureFunction = outerFunction();
// console.log(closureFunction());
let createCounter = () => {
    let count = 0;
    return  () => 
        ++count;
    }
    let createCounter2 = () => {
    let count = 0;
  return function(){
    return ++count;
  };
    }
    let coun2 = createCounter2();
    console.log(coun2());

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
let counter2 = createCounter();
console.log(counter2());