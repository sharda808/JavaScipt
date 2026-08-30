function add1(first, second) {
  return first + second;
}
console.log(add1(3,4));
// anonymous functiom
const add2 = function(first,second) {
  return first + second;
}
console.log(add2(4,9));
const add3 = (first,second) => {
  return first + second;
}
console.log(add3(6,7));
const square1 = (num) => {
return num * num;
} 
// for single Argument : round braackest optinonal
const square = num => {
  return num * num;
}
console.log(square(7));
// for single Line: Curly brakest and return optinonal
const square2 = num => num * num;
// Application with Array
const numbers = [2,4,6,8,10];
let squares = numbers.map(function(num) {
  return num * num;
});
let square3 = numbers.map(num => num * num);
const doubledArrow = numbers.map(num => num * 2);
console.log(doubledArrow);
console.log(squares)