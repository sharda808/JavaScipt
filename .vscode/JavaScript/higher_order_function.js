// function that return a function
const createDouble  = () =>  {
return num => num * 2 ;

}
const createDouble2= () => {
  return function(num) {
    return num * 2;
  }
}

const twice = createDouble();
console.log(twice(7));
console.log(createDouble()(8));
