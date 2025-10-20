console.log('using local storage');
// localStorage.setItem('name','KGCoding');
// let User = {
//     fisrtName:'sharda',
//     lastName:'Jha',
//     age:21,
//     email:'shardakumari@gmail.com',
//     skills:['c','c++'],

// };
// localStorage.setItem('userInfo',JSON.stringify(User));
let userInfoStr = localStorage.getItem('userInfo');
console.log(userInfoStr);
console.log(typeof userInfoStr);
let userInfo = JSON.parse(userInfoStr);
console.log(userInfo);

