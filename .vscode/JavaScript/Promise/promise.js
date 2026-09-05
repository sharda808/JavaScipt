// function getDatafromInternet(successCallback){
//   console.log('Getting data from internet');
//       successCallback('KG Coding');
//   }
//   getDatafromInternet((data) => {
//     console.log(`Data is fetched ${data}`);
//   }
//   )
  function getDatafromInternetUsingPromise(){
    let promise = new Promise((resolve, reject) => {
 console.log('Getting data from internet using Promise');
//  for(let i=0; i<100; i++) console.log(i);
 resolve('KG Coding');
//  reject('Internet Timeout');
    });
return promise;
  }
  getDatafromInternetUsingPromise()
  .then((data) => {
    console.log(`Data is fetched ${data}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  })
  .finally(() => {
    console.log('Finally block');
  })