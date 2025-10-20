function getSum(num){
   if(num==0){
    return 1;
   }
  return num + getSum(num-1);
}
console.log(getSum(9));