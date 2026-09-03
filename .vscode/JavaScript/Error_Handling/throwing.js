function divide(a,b) {
  if(b==0){
  //    let error=  new Error('Divide by zero');
  // throw error;
  throw new Error('Divide by Zero');
  }
  return a/b;
}
console.log(divide(6,3));
try {
console.log(divide(3,0));
}
catch (error) {
  console.log('Error occured');
  console.log(error.message);
}
console.log(divide(3,6));
