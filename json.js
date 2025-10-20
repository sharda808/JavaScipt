// const person = {
//     name:"sharda",
//     age:21,
//     city:"Allahabad",
//     skills:["Javascript", "Node.js", "React"]
// };
// convert the javaScript object to a JSON string
// const jsonString = JSON.stringify(person);
// console.log("JSON String:", jsonString);
// convert the JSON string back to a javascript object
// const jsonObject = JSON.parse(jsonString);
// console.log("Javascript Object:", jsonObject);
// Access properties from the parsed JavaScript object
// console.log("Name:", jsonObject.name);
// console.log("Skills:", jsonObject.skills.join(","));
// console.log('Using Local storage');
// localStorage.setItem('name', 'ApnaCollge')
// let user = {
//     firstName:'sharda',
//    lastName:'Kuamri',
//    age:21,
//    email:'sharda@gmail.com',
//    hobbies:['music','sports'],
// };
// localStorage.setItem('userInfo',JSON.stringify(user));
let userInfoStr = localStorage.getItem('userInfo');
console.log(userInfoStr);
console.log(typeof(userInfoStr));
let userInfo = JSON.parse(userInfoStr);
console.log(userInfo);
