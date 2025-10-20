// console.log("Events");
// let clickHandler = () => {
//     console.log('Button clicked');
// }
// let buttonclickHandler = () => {
//     for(let i=0; i<5; i++){
//         console.log(i);
// }
// }
// let button = document.getElementById('myButton');
//using Event Handler
// button.onclick = buttonclickHandler;
// button.onclick = clickHandler;
// Using event listener
// button.addEventListener('click',clickHandler);
// button.addEventListener('click',clickHandler);
// button.addEventListener('click',buttonclickHandler);
//  button.removeEventListener('click',clickHandler);
//  // Event propagation(Bubbling)
//   outerDiv = document.getElementById('outerDiv');
//   const innerButton = document.getElementById('innerButton');
//   outerDiv.addEventListener('click',() => {
//console.log('outer Div clicked(bubbling).');
// const outer = document.querySelector('.outer');
// const inner = document.querySelector('.inner');
// outer.addEventListener('click',() => {
// console.log('outer');
    
// },true);
// function clickHandler(event) {
//     console.log('inner');
//     event.stopPropagation();
// }
// inner.addEventListener('click',(event) => {
//     console.log('inner');
//    event.stopPropagation();
// });
// inner.addEventListener('click',clickHandler);
// inner.addEventListener('click',(event) =>{
//     console.log('Inner Button clicked.');
//     event.stopPropagation();
// });
// outer.addEventListener('click',() => {
//     console.log('outer clicked.');
// });
const user1 = {
    name:"sharda jha",
    age:21,
    email:"shardakumari96115@gmail.com",
    isAdmin:false,
};
const user2 = {
    name:"sweta",
    age:22,
    email:"swata@example.com",
isAdmin:false,
};
// function to update user's admin status
function makeUserAdmin(user){
    user.isAdmin = true;
}
makeUserAdmin(user1);
console.log(user1.isAdmin);
console.log(user2.isAdmin);