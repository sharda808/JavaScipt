let myFunction = function() {
  console.log('I am an anonymous function');
}
myFunction();
setTimeout(function() {
  console.log('I am an anonymous function');
}, 3000);
const add = function(a,b) {
  return a+b;
};
console.log(add(2,4));