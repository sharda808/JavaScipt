// console.log("Hi sharda");
// function divide(a,b) {
//  if(b===0)   {
//      throw  new Error('Divide by zero');

//  }
//     return a / b;

// }
// console.log(divide(6,2));
// try {


// console.log(divide(3,0));
// }
// catch(error){
//     console.log('Error occured');
//     console.log(error.message);
// }
// finally {
//     console.log('This will always execute');
// }
// console.log(divide(4,5));
function jsonStringToJson(str){
    try {
        console.log('Try');
        return JSON.parse(str);

    }
    catch(error){
        console.log('Error occured');
        console.log(error.message);
        return {};
    }
    finally{
        console.log('Finally');
    }
}
let newObj2 = jsonStringToJson('{"A":1}');
console.log('Obj2',newObj2);
console.log("Hi sharda");
