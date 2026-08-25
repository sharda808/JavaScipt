


let even = [2,4,6,8,10];
console.log(even);
let newEven = [0,...even,14];
newEven.push(12);
console.log('even', even);

console.log('newEven', newEven);
console.log(newEven.length);
let obj = {
  a : 45,
   x:98,
   hello: 'world',


z:{
name: 'Zain',
age : 22
}
}
let newObj = {...obj, b: 67};
console.log('obj', obj);
console.log('newObj', newObj);
newObj.x = 100;
newObj.z.name = 'Ali';
console.log('obj', JSON.stringify(obj));
console.log('newObj', JSON.stringify(newObj));

