console.log("welcome to javascript")
function divide(a,b) {
if(b ===0) {

    throw new Error('Divide by Zero');
}   
return a/b;
}
console.log(divide(6,3));
try {
    console.log(divide(3,0));
}
catch(error){
    console.log('Error occured');
console.log(error.message);    
}

console.log(divide(3,6));
function jsonStringToJson(str) {
    try {
console.log('Try');
return JSON.parse(str);
 }
    catch(error) {
  console.log('Error occured');
console.log(error.message);
 return {};
    }
    finally {
        console.log('Finally');

    }
}
let newObj2 = jsonStringToJson('{"A":;1}');
console.log('obj2',newObj2);
