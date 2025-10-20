// // API - application programming interface
// console.log("Hi sharda");
// const getPromise = () => {
//    return  new Promise((resolve, reject) => {
//         console.log("I am a promise");
//     resolve("success");  
//    // reject("error");  
//     });
// };
// let promise  = getPromise();
// promise.then((result) => {
//     console.log("promise fulfilled",result);
// });
// promise.catch((error) => {
//     console.log("rejected",error);
// });
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//    console.log(" deta1");  
//    resolve("success");       
//         },4000);
//     });
// }
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//    console.log(" deta2");  
//    resolve("success");       
//         },4000);
//     });
// }
// console.log("fetching data1....")
//  asyncFunc1().then((res) => {

 
//     console.log("fetching data2....");
// let p2 = asyncFunc2().then((res) => {});

// });
function getData(dataId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
  console.log("data",dataId);  
  resolve("success");        
        },2000);
    });
}
// promise chain 
// console.log("getting data1....");
// getData(1)
// .then((res) => {
// console.log("getting data1....");
//     return getData(2);
// })
// .then((res) => {
//     console.log("getting data1....");
//     return getData(3);
  
// })
// .then((res) => {
//     console.log(res);
// });
// async function hello(){
//     console.log("hello");
// }
// hello();
function api () {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("weather data")
resolve(200);
    },2000);
});
}
async function getWeatherData(){
   await api(); 
   await api();
}

(async function () {
    console.log("getting data1.....");
    await getData(1);
       console.log("getting data2.....");
    await getData(2);
       console.log("getting data3.....");
await getData(3);
   console.log("getting data4.....");
   await getData(4);
      console.log("getting data5.....");
  await getData(5);
     console.log("getting data6.....");  
     await getData(6);  
})();


// async-awiat>> promise>>callback hell