// console.log("one");
// console.log("Two");
// console.log("Three");
// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,2000);// timeout;
// Asynchronous programming
// console.log('one');
// setTimeout(() => {
//     console.log("hello");
// }, 4000);
// console.log("four");
// callbacks
// A callback is a function passed as an argument to another function
// function sum(a,b) {
//     console.log(a + b);
// }
// function calculator(a,b, SumCallback){
// SumCallback(a,b);

// }
// calculator(1,2,(a,b) => {
//     console.log(a + b);
// });
// const hello = () => {
//     console.log("hello");
// // }
// setTimeout(hello,3000);
// function getData(dataId,getNextData) {
//     setTimeout(() => {


//     console.log('data',dataId);
//     if(getNextData){
//  getNextData();  
//     }
// },2000);
// }
// getData(1, () => {
// console.log("getting data2....");    
//     getData(2,() => {
// console.log("getting data3...."); 
//   getData(3,() => {
//     console.log("getting data4...."); 
//     getData(4);
//   });

// });    
// });
// let promise = new Promise((resolve,reject) => {
//     console.log("I am a promise");
//    reject("some Error occured");
// });
function getData(dataId, getNextData) {
    return new Promise((resolve,reject) => {
  setTimeout(() => {
    console.log("data",dataId);
    if(getNextData){
        getNextData();
    }
  },5000);      
    });
}
// getData(1, () => {
// console.log("getting data2....");    
//     getData(2,() => {
// console.log("getting data3...."); 
//   getData(3,() => {
//     console.log("getting data4...."); 
//     getData(4);
//   });

// });    
// });

